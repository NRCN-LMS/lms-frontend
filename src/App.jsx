import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import HeroSection from "./pages/formar/HeroSection";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Animals from "./pages/formar/Animals";
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
