const routes = {
    admin: {
        dashboard: '/admin',
        productDetail: '/admin/product/:id',
        productList: '/admin/products',
        productCreate: '/admin/product/create',
        customers: '/admin/customers',
    },

    user: {
        home: '/',
        productList: '/products',
        productDetail: '/product/:productId/:variantId',
        cart: '/cart',
    },

    other: {
        login: '/login',
        register: '/register',
        forbidden: '/forbidden',
    },
};

export default routes;
