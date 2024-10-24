import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { AddProduct, Login, Products, Profile, SignUp } from "./pages";
import DashboardLayout from "./components/layout/Dashboard";
import Overview from "./pages/Overview";
const ProjectRoutes = () => {
  const element = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Overview /> },
        { path: "profile", element: <Profile /> },
        // { path: "factories", element: <Factories /> },
        {
          path: "products",
          children: [
            { path: "", element: <Products /> },
            { path: "add-product", element: <AddProduct /> },
          ],
        },
      ],
    },
    { path: "*", element: <Login /> },
  ]);

  return element;
};

function App() {
  return (
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  );
}

export default App;
