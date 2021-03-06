<p align="center">
    <a href="https://chrome.google.com/webstore/detail/minikan/dphkgaloabgpiaobcjhilcldiikljenb">
        <img src="https://raw.githubusercontent.com/neil-vqa/minikan/main/minikan-banner.png">
    </a>
</p>

A minimal Kanban-like task manager as a Chrome extension. Download it here: https://chrome.google.com/webstore/detail/minikan/dphkgaloabgpiaobcjhilcldiikljenb

### Tip: For a better directory structure when building your own implementation, use the "organize" branch.

## Screenshots

![shot1](https://lh3.googleusercontent.com/fPdq0O76jeuCixd4KExAYl5TB2mSscr1xTQgMNBAtOHA21C5FKCmyJnGK80IEuVoK2EV5SHYvvsUNjnBf-vC0UPYEw=w640-h400-e365-rj-sc0x00ffffff)

![shot2](https://lh3.googleusercontent.com/si1X34wC69ptgorOoZGhVGoWKEnqmvBr0Bdcr5UwOBjAklLCdxdGefBhBb8gl91Huo148UCty1TlGd2Vvxf12Ww-GQ=w640-h400-e365-rj-sc0x00ffffff)

## Get started

As of version 1.4: vue-2.6.12, vuedraggable-2.24.3, vue-clipboard2-0.3.1, tailwindcss-2.1.2

(1) Build CSS for development.

```javascript
npm run build:css-dev
```

(2) app.js is where to create/customize the vue app.

(3) Build for production. This will create a dist/ in extension.

```javascript
npm run build:prod
```

## Download

If you just want to use the extension right away, you can download it in the Chrome webstore: https://chrome.google.com/webstore/detail/minikan/dphkgaloabgpiaobcjhilcldiikljenb

Please do report issues you may experience in the Support section. Also, if you have some spare time, please leave a review. :grin:

## License

MIT License

Copyright (c) 2021 Neil Van

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
