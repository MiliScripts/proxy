# Telegram Proxy Crawler

This script allows you to crawl Telegram proxy channels and fetch the latest MTProto proxies.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your_username/telegram-proxy-crawler.git
    ```

2. Navigate to the project directory:

    ```bash
    cd telegram-proxy-crawler
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Modify the `channels` array in `proxyCrawler.js` to include the channels you want to crawl.

2. Run the script:

    ```bash
    node proxyCrawler.js
    ```

3. The script will crawl the specified channels and print the latest MTProto proxies to the console.

## Notes

- This script relies on web scraping, which may break if the structure of Telegram channels changes. Please use it responsibly and ensure compliance with Telegram's terms of service.

- Make sure to check and respect the terms of use and legality of proxies in your jurisdiction before using them.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
