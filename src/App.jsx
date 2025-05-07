import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWrapper from "./wrappers/LayoutWrapper.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";
import ToastProvider from "./components/ToastProvider.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import DashboardWrapper from "./wrappers/DashboardWrapper.jsx";
import authLoader from "./loaders/unit/authLoader.js";
import Logout from "./components/Logout.jsx";
import AdminWrapper from "./wrappers/AdminWrapper.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import RecruiterWrapper from "./wrappers/RecruiterWrapper.jsx";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard.jsx";


const routes = [
  {
    path: '/',
    element: <LayoutWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Dashboard...</div>,
    children: [
      {
        index: true,
        element: <UserDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Admin Dashboard...</div>,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  },
  {
    path: "/recruiter/dashboard",
    element: <RecruiterWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Recruiter Dashboard...</div>,
    children: [
      {
        index: true,
        element: <RecruiterDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return <>
    <Provider store={store}>
      <ToastProvider />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  </>
}

export default App;