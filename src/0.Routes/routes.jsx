import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../0.Layout/Main";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import ExamPage from "../Pages/ExamPage/ExamPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "examPage",
        element: (
          <PrivateRoute>
            <ExamPage></ExamPage>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
