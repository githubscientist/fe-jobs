import { Navigate, Outlet, useLoaderData } from 'react-router';
import NavBar from '../components/NavBar';

const LayoutWrapper = () => {

    const user = useLoaderData();

    if (user) {
        if (user.role === 'admin') {
            return <Navigate to="/admin/dashboard" />
        } else if (user.role === 'user') {
            return <Navigate to="/dashboard" />
        } else if (user.role === 'recruiter') {
            return <Navigate to="/recruiter/dashboard" />
        }
    }

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LayoutWrapper;