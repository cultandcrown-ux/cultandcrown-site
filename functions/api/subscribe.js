// Cloudflare Pages Function: POST /api/subscribe
// Saves newsletter sign-ups in the KV namespace bound as SUBSCRIBERS.
// Each email is a key; the date and the page it came from are stored as metadata.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function reply(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

export async function onRequestPost({ request, env }) {
  if (!env.SUBSCRIBERS) return reply({ ok: false, error: 'not_configured' }, 503);

  let data;
  try {
    const type = request.headers.get('content-type') || '';
    data = type.includes('application/json') ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    return reply({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: real people never fill this hidden field.
  if (data.website) return reply({ ok: true });

  const email = String(data.email || '').trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) return reply({ ok: false, error: 'invalid_email' }, 400);

  const existing = await env.SUBSCRIBERS.get(email);
  if (existing) return reply({ ok: true, already: true });

  const record = {
    subscribedAt: new Date().toISOString(),
    source: String(data.source || '').slice(0, 200),
    country: request.cf?.country || '',
  };
  await env.SUBSCRIBERS.put(email, JSON.stringify(record), { metadata: record });
  return reply({ ok: true });
}

export function onRequest() {
  return reply({ ok: false, error: 'method_not_allowed' }, 405);
}
