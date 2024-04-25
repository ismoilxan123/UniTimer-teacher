import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { ConfigProvider } from "antd";
import Home from "./pages/Home";
import MeningJadvalim from "./pages/MeningJadvalim";
import JadvalUzgartirish from "./pages/JadvalUzgartirish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "meningJadvalim",
        element: <MeningJadvalim />,
      },
      {
        path: "jadvalUzgartirish",
        element: <JadvalUzgartirish />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#bc8e5c",
            fontSize: 16,
          },
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
