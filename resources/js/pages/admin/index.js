import AdminDashboard from './Dashboard';
import AdminProductList from './Product/List';
import AdminProductDetail from './Product/Detail';
import AdminCustomers from './Customers';
import AdminProductCreate from './Product/Create/AdminProductCreate';

const admin = {
    dashboard: AdminDashboard,
    productList: AdminProductList,
    productDetail: AdminProductDetail,
    productCreate: AdminProductCreate,
    customers: AdminCustomers,
};

export default admin;
