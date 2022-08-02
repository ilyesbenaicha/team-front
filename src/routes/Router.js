import { lazy } from "react";
//import New from "../pages/New";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const SignIn = lazy (()=> import("../views/SignIn"))
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Users = lazy(() => import("../views/ui/Users"));
const Tasks = lazy(() => import("../views/ui/Tasks"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Calendar = lazy(()=> import("../views/ui/Calendar"))
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const New = lazy(() => import("../pages/New"));
/*****Routes******/
const ThemeRoutes = [
  { path: "/login", exact: true, element: <SignIn /> },

  {
    path: "/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/users", exact: true, element: <Users /> },
      
      { path: "/tasks", exact: true, element: <Tasks /> },
      { path: "/calendar", exact: true, element: <Calendar /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/users/new", exact: true, element: <New /> },

    ],
  },
];
export default ThemeRoutes;
