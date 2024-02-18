const channels = [
  "ProxyDaemi",
  "yebekheproxy",
  "GlypeX",
  "HiProxy",
  "Lion_MTProto",
  "ProxyMTProto",
  "Myporoxy",
  "iMTProto",
  "TelMTProto",
  "PlusMTProto",
  "MTP_roto",
  "ProxyHagh",
  "proxyhubs",
  "proxyme",
  "ProxyMTProto_tel",
  "proxyy",
  "russian_proxy",
  "PinkProxy",
  "V2rayng_Fast",
  "alephproxy",
  "ProxyForOpeta"
];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const channel = url.searchParams.get('channel');

  if (!channel) {
    // If no channel is provided, return the styled dropdown selection
    const dropdownOptions = channels.map(ch => `<option value="${ch}">${ch}</option>`).join('\n');
    const dropdownHtml = `
    <!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>پروکسی آزاد</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    @font-face {
      font-family: 'Estedad';
      src: url('https://www.iranicard.ir/wp-content/themes/iranicard_v2/assets/fonts/estedad/fd/estedad-FD-Regular.woff2') format('woff2');
    }
    body {
      font-family: 'Estedad', sans-serif;
      background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      padding: 20px;
    }
    .dropdown-container {
      max-width: 400px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
    .form-select {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: #f7f7f7;
    }
    .btn-primary {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn-primary:hover {
      background-color: #4CAF50;
    }
    .footer {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
  }
    h3, p {
      color: #333;
      text-align: center;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="dropdown-container">
    <h3>لیست منابع پروکسی</h3><br>
    <form id="channelForm" class="container">
      <select id="channel" name="channel" class="form-select">
        ${dropdownOptions}
      </select>
      <input type="submit" value="دریافت پروکسی" class="btn btn-primary">
      <p><a href="https://t.me/hiimili" target="_blank" rel="noopener noreferrer">پروکسی‌ها بصورت لحظه‌ای آپدیت می‌شوند</a></p>
      <p><a href="https://api-tg.imili.ir" target="_blank" rel="noopener noreferrer">API</a></p>
    </form>
  </div> 
  <footer class="footer">
  <div class="container">
    <p>by mili</p>
  </div>
</footer>
</body>
</html>

    `;
    return new Response(dropdownHtml, {
      headers: { 'Content-Type': 'text/html' },
    });
  }


  const proxies = await getProxies(channel);
  // Generate HTML for the proxy buttons with Bootstrap styling
  const buttonsHtml = proxies.map(proxy => `<a href="${proxy}" class="btn btn-secondary m-2 d-block text-center"><i class="fas fa-plug"></i> اتصال</a>`).join('\n');
  const pageHtml = `
  <!DOCTYPE html>
  <html lang="fa"> <!-- Setting language to Persian -->
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>اتصال</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
      <style>
      @font-face {
        font-family: 'Estedad';
        src: url('https://www.iranicard.ir/wp-content/themes/iranicard_v2/assets/fonts/estedad/fd/estedad-FD-Regular.woff2') format('woff2');
      }
  
          body {
              font-family: 'Estedad', sans-serif;
              background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
              margin: 0;
              padding: 0;

          }
  
          .container {
              text-align: center;
              margin-top: 50px; /* Adjusted top margin */
          }
  
          .back-btn {
            
              position: absolute;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
              text-decoration: none;
              color: #333; /* Icon color */
          }
  
          .dynamic-buttons {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 20px;
          }
  
          .btn {
              margin: 10px;
              padding: 15px 30px;
              border: none;
              border-radius: 10px;
              background: black; /* Glassmorphism background */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
              text-decoration: none;
              color: white;
          }
          .footer {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 20px;
          }
          .btn:hover {
              transform: translateY(-5px);
              box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
          }
      </style>
  </head>
  <body>
  <a href="https://tg.imili.ir/" class="back-btn"><i class="fas fa-arrow-circle-left"></i></a>
  
  <div class="container">
      <div class="dynamic-buttons">
          ${buttonsHtml} <!-- Your dynamic buttons here -->
      </div>
  </div>
  <footer class="footer">
  <div class="container">
    <p>by mili</p>
  </div>
</footer>
  </body>
  </html>
  
  `;
  return new Response(pageHtml, {
    headers: { 'Content-Type': 'text/html' },
  });
}

async function getProxies(channel) {
  const response = await fetch("https://t.me/s/" + channel);
  const html = await response.text();

  // Use regular expressions to extract proxies
  const proxyRegex1 = /href="(.*?\/proxy\?.*?)"/g;
  const proxyRegex2 = /class="tgme_widget_message_inline_button url_button" href="(.*?\/proxy\?.*?)"/g;

  let proxies = [];
  let match;

  while (match = proxyRegex1.exec(html)) {
    proxies.push(match[1].replace(/;/g, "&").replace("https://t.me/", "tg://"));
  }

  while (match = proxyRegex2.exec(html)) {
    proxies.push(match[1].replace(/;/g, "&").replace("https://t.me/", "tg://"));
  }

  return proxies;
}
