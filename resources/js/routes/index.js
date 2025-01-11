import config from '../config';
import pages from '../pages';
import layouts from '~/layouts';

const publicRoutes = [
    { path: config.routes.user.home, component: pages.user.home, layout: layouts.user.home },
    { path: config.routes.user.productDetail, component: pages.user.productDetail, layout: layouts.user.default },
    { path: config.routes.user.productList, component: pages.user.productList, layout: layouts.user.default },
    { path: config.routes.user.cart, component: pages.user.cart, layout: layouts.user.default },
    { path: config.routes.user.cartStep2, component: pages.user.cartStep2, layout: layouts.user.default },
    { path: config.routes.user.cartStep3, component: pages.user.cartStep3, layout: layouts.user.default },

    { path: config.routes.other.login, component: pages.other.login, layout: layouts.other.default },
    { path: config.routes.other.register, component: pages.other.register, layout: layouts.other.default },
    { path: config.routes.other.forbidden, component: pages.other.forbidden, layout: layouts.other.default },
];

const privateRoutes = [
    { path: config.routes.admin.dashboard, component: pages.admin.dashboard, role: 'admin' },
    { path: config.routes.admin.productDetail, component: pages.admin.productDetail, role: 'admin' },
    { path: config.routes.admin.productList, component: pages.admin.productList, role: 'admin' },
    { path: config.routes.admin.productCreate, component: pages.admin.productCreate, role: 'admin' },
    { path: config.routes.admin.customers, component: pages.admin.customers, role: 'admin' },
];

export { publicRoutes, privateRoutes };
