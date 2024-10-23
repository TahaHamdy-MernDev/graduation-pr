import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Login, Products, SignUp } from "./pages";
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
        { path: "", element: <Overview /> }, // Default dashboard page
        // { path: "factories", element: <Factories /> },
        { path: "products", element: <Products /> },
        // Add more nested routes for different sections of the dashboard
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
