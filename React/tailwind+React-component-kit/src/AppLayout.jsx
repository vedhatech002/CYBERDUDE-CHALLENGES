import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Body from "./components/Body";
import AlertPage from "./pages/AlertPage";
import CardPage from "./pages/CardPage";
import ButtonPage from "./pages/ButtonPage";

const AppLayout = (props) => {
  return (
    <>
      <header className="bg-[#08d6fb] px-8 py-4 text-xl text-slate-800 flex  items-center justify-between ">
        <h1 className="text-xl font-bold">Reactail Ui Kit </h1>
        <nav className=" flex gap-6 items-centertext-sm font-semibold ">
          <Link to={"/"}>Home</Link>
          <Link to={"/alert"}>Alerts</Link>
          <Link to={"/card"}>Cards</Link>
          <Link to={"/button"}>Buttons</Link>
        </nav>
      </header>
      <main className="mx-40  mt-10 ">
        <Outlet />
      </main>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/alert",
        element: <AlertPage />,
      },
      {
        path: "/button",
        element: <ButtonPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={approuter} />
);
