import AdminLayout from './admin/default/AdminLayout';
import UserLayout from './user/default/UserLayout';
import HomeLayout from './user/default/HomeLayout';
import DefaultLayout from './other/DefaultLayout';

const layouts = {
    admin: {
        default: AdminLayout,
    },

    user: {
        default: UserLayout,
        home: HomeLayout,
    },

    other: {
        default: DefaultLayout,
    },
};

export default layouts;
