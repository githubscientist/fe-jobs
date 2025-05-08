const UserDashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                <p className="text-gray-700">Welcome to your dashboard!</p>
                <p className="text-gray-700">Here you can manage your profile, view notifications, and more.</p>
            </div>
            <div className="mt-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Profile
                </button>
                <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
            <div className="mt-4">
                <p className="text-gray-500">Last login: {new Date().toLocaleString()}</p>
                <p className="text-gray-500">User role: User</p>
            </div>
        </div>

    )
}

export default UserDashboard;