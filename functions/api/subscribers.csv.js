// Cloudflare Pages Function: GET /api/subscribers.csv?token=...
// Downloads the full list as CSV, ready to import into any newsletter service.
// Works only if the EXPORT_TOKEN variable is set in Cloudflare and the token matches.
export async function onRequestGet({ request, env }) {
  const token = new URL(request.url).searchParams.get('token');
  if (!env.EXPORT_TOKEN || !env.SUBSCRIBERS || token !== env.EXPORT_TOKEN) {
    return new Response('Not found', { status: 404 });
  }
  const rows = [['email', 'subscribed_at', 'source', 'country']];
  let cursor;
  do {
    const page = await env.SUBSCRIBERS.list({ cursor, limit: 1000 });
    for (const k of page.keys) {
      const m = k.metadata || {};
      rows.push([k.name, m.subscribedAt || '', m.source || '', m.country || '']);
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="cult-and-crown-subscribers.csv"',
      'Cache-Control': 'no-store',
    },
  });
}
