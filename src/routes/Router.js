import { lazy } from "react";
//import New from "../pages/New";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const SignIn = lazy (()=> import("../views/SignIn"))
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Users = lazy(() => import("../views/ui/Users"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const New = lazy(() => import("../pages/New"));
/*****Routes******/
const ThemeRoutes = [
  { path: "/", exact: true, element: <SignIn /> },

  
   { path: "/users", exact: true, element: <Users /> 
    ,
    children: [
      { path: "/new", exact: true, element: <New /> },
    ]},

  {
    path: "/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
   
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];
export default ThemeRoutes;
