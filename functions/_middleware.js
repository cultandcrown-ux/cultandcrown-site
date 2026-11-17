// Redirect www.cultandcrown.com to the canonical domain, so Google sees one site instead of a duplicate.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.cultandcrown.com') {
    url.hostname = 'cultandcrown.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
