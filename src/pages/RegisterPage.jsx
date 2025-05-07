import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from '../redux/features/auth/registerSlice';
import authServices from "../services/authServices";

const RegisterPage = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // hanlde register logic here
        authServices.register({ name, email, password })
            .then((response) => {
                console.log(response.data.message);

                // clear the form
                dispatch(setName(''));
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                // redirect to login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch((error) => {
                console.error(error.response.data.message);
            });
    }

    return (
        <div className="max-w-xs mx-auto mt-20 p-4 border rounded">
            <h2 className="text-xl mb-4">User Registration</h2>
            <form className="flex flex-col space-y-3"
                onSubmit={handleRegister}
            >
                <input name='name' type="text" placeholder="Name" className="border p-2 rounded"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />

                <input name='email' type="email" placeholder="Email" className="border p-2 rounded"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                />

                <input name='password' type="password" placeholder="Password" className="border p-2 rounded"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                />

                <button className="bg-blue-500 text-white p-2 rounded" type="submit">Register</button>
            </form>
            <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
            </p>
        </div>
    )
}

export default RegisterPage;