import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import HeroSection from "./pages/formar/HeroSection";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Animals from "./pages/formar/Animals";
import BuyedAnimals from "./pages/formar/BuyedAnimals";
import Profile from "./pages/formar/Profile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Animals/>
          </>
        ),
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/buyed-animals",
        element:<BuyedAnimals/>
      },{
        path:"/profile",
        element:<Profile/>
      }
    ],
  },
]);
function App() {
  return (
    <main>
     <RouterProvider router={appRouter}/>

    </main>
  );
}

export default App;
