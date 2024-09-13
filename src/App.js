import { Button } from "antd";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HotelsPage from "./Pages/HotelsPage";
const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/hotels", element: <HotelsPage />}, // dynamic route


])
function App() {

  return (
    <RouterProvider router={router} />
      
    
  );
}

export default App;
