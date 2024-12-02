import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ManiLayOuts from "../layouts/ManiLayOuts";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import AllCoffee from "../pages/AllCoffee";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <ManiLayOuts></ManiLayOuts>,
      errorElement: <h2> thi page not  fount </h2>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/coffee'),
        },
        {
            path: '/addcoffee',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: "/updatecoffee/:id",
            element:<UpdateCoffee></UpdateCoffee>,
            loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path:'/allcoffee',
          element: <AllCoffee></AllCoffee>,
          loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>,
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: () => fetch('http://localhost:5000/users')
        },
      ]
    },
  ]);