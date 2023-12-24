import { createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AdminList,
  AllJobs,
  UserList,
  Stats,
} from "../views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "jobs",
        element: <AllJobs />,
      },
      {
        path: "job/create",
        element: <AddJob />,
      },
      { path: "stats", element: <Stats /> },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "admin",
        element: <AdminList />,
      },
    ],
  },
]);
