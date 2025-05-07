import { Navigate, Outlet, useLoaderData } from "react-router";
import NavBar from "../components/NavBar";

const DashboardWrapper = () => {

    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" />
    }

    if (user.role === 'admin') {
        return <Navigate to="/admin/dashboard" />
    } else if (user.role === 'recruiter') {
        return <Navigate to="/recruiter/dashboard" />
    }

    return (
        <>
            <NavBar
                user={user}
            />
            <Outlet />
        </>
    )
}

export default DashboardWrapper;