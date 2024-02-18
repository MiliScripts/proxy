addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const channel = url.searchParams.get('channel');

  if (!channel) {
    return new Response('Channel parameter is missing', { status: 400 });
  }

  const proxies = await getProxies(channel);
  const responseBody = JSON.stringify({ proxies });

  return new Response(responseBody, {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function getProxies(channel) {
  const response = await fetch("https://t.me/s/" + channel);
  const html = await response.text();

  const proxyRegex1 = /href="(.*?\/proxy\?.*?)"/g;
  const proxyRegex2 = /class="tgme_widget_message_inline_button url_button" href="(.*?\/proxy\?.*?)"/g;

  let proxies = [];
  let match;

  while (match = proxyRegex1.exec(html)) {
    proxies.push(match[1].replace(/;/g, "&"));
  }

  while (match = proxyRegex2.exec(html)) {
    proxies.push(match[1].replace(/;/g, "&"));
  }

  return proxies;
}
