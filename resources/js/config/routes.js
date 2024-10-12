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
        productDetail: '/product/:product_id/:variant_id',
    },
};

export default routes;
