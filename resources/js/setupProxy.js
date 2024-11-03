import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/provinces',
        createProxyMiddleware({
            target: 'https://provinces.open-api.vn',
            changeOrigin: true,
        }),
    );
}
