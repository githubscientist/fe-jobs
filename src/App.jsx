import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWrapper from "./wrappers/LayoutWrapper.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";


const routes = [
  {
    path: '/',
    element: <LayoutWrapper />,
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