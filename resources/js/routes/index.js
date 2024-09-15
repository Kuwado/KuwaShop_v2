import config from '../config';

import pages from '../pages';

const publicRoutes = [
    { path: config.routes.admin.dashboard, component: pages.admin.dashboard },
    { path: config.routes.admin.productDetail, component: pages.admin.productDetail },
    { path: config.routes.admin.productList, component: pages.admin.productList },
    { path: config.routes.admin.productCreate, component: pages.admin.productCreate },
    { path: config.routes.admin.customers, component: pages.admin.customers },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
