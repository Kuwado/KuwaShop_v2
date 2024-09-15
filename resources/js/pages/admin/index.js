import AdminDashboard from './Dashboard';
import AdminProductList from './product/List';
import AdminProductDetail from './product/Detail';
import AdminCustomers from './Customers';
import AdminProductCreate from './product/Create/AdminProductCreate';

const admin = {
    dashboard: AdminDashboard,
    productList: AdminProductList,
    productDetail: AdminProductDetail,
    productCreate: AdminProductCreate,
    customers: AdminCustomers,
};

export default admin;
