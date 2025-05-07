import { Link } from "react-router";

const LoginPage = () => {
    return (
        <div className="max-w-xs mx-auto mt-20 p-4 border rounded">
            <h2 className="text-xl mb-4">User Login</h2>
            <form className="flex flex-col space-y-3">
                <input name='email' type="email" placeholder="Email" className="border p-2 rounded" />

                <input name='password' type="password" placeholder="Password" className="border p-2 rounded" />

                <button className="bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
            </form>
            <p className="mt-4 text-center">
                Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
            </p>
        </div>
    )
}

export default LoginPage;