import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const ManageUsers = () => {
    const menuList = [
        {
            name: "View All Users",
            path: "/admin/dashboard/users",
        },
        {
            name: "Add New User",
            path: "/admin/dashboard/users/add",
        }
    ]

    return (
        <div className="flex flex-row gap-8">
            <SideBar menuList={menuList} />
            <Outlet />
        </div>
    )
}

export default ManageUsers;