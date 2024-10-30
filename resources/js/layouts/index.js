import AdminLayout from './admin/default/AdminLayout';
import UserLayout from './user/default/UserLayout';
import HomeLayout from './user/default/HomeLayout';

const layouts = {
    admin: {
        default: AdminLayout,
    },
    user: {
        default: UserLayout,
        home: HomeLayout,
    },
};

export default layouts;
