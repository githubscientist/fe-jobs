const HomePage = () => {
    return (
        <div className="max-w-xs mx-auto mt-20 p-4 border rounded">
            <h2 className="text-xl mb-4">Home</h2>
            <p>Welcome to the home page</p>
            <ul className="list-disc pl-5">
                <li>Click on the links above to register or login</li>
                <li>After logging in, you will be redirected to the dashboard</li>
                <li>You can then search for jobs and apply to them</li>
            </ul>
        </div>
    )
}

export default HomePage;