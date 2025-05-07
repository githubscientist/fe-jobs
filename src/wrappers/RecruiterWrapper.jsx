import { Navigate, Outlet, useLoaderData } from 'react-router';
import NavBar from '../components/NavBar';

const RecruiterWrapper = () => {

  const user = useLoaderData();

  if (!user) {
    return <Navigate to="/login" />
  }

  if (user.role === 'user') {
    return <Navigate to="/dashboard" />
  } else if (user.role === 'admin') {
    return <Navigate to="/admin/dashboard" />
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

export default RecruiterWrapper;