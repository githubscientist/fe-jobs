import { Link } from "react-router";

const SideBar = ({ menuList }) => {
    return (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md h-full w-1/4 mx-4">
            <h2 className="text-xl font-bold mb-4">Manage Users</h2>
            <ul className="space-y-2">
                {menuList.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} className="text-blue-600 hover:underline">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar;