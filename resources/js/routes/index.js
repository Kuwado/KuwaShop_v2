import config from '../config';
import pages from '../pages';
import layouts from '~/layouts';

const publicRoutes = [
    { path: config.routes.admin.dashboard, component: pages.admin.dashboard },
    { path: config.routes.admin.productDetail, component: pages.admin.productDetail },
    { path: config.routes.admin.productList, component: pages.admin.productList },
    { path: config.routes.admin.productCreate, component: pages.admin.productCreate },
    { path: config.routes.admin.customers, component: pages.admin.customers },

    { path: config.routes.user.home, component: pages.user.home, layout: layouts.user.default },
    { path: config.routes.user.productDetail, component: pages.user.productDetail, layout: layouts.user.default },
    { path: config.routes.user.productList, component: pages.user.productList, layout: layouts.user.default },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
