import { lazy } from "react";

//import New from "../pages/New";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const SignIn = lazy (()=> import("../views/SignIn"))
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Users = lazy(() => import("../views/ui/Users"));
const Task = lazy(() => import("../views/ui/Task"));

//const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Resetpassword = lazy(() => import("../views/ui/Resetpassword"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Calendars = lazy(()=> import("../views/ui/Calendars"))
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const New = lazy(() => import("../pages/New"));
const Projects= lazy(()=> import("../views/ui/Projects"));
const ListeTasks= lazy(()=>import("../views/ui/ListeTask/ListTaskItem"))
/*****Routes******/
const ThemeRoutes = [
  { path: "/login", exact: true, element: <SignIn /> },
  {path: "/", exact: true, element: <SignIn/>},
  {
    path: "/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/users", exact: true, element: <Users /> },
      {path: "/project",exact:true , element:<Projects/>},
      { path: "/tasks", exact: true, element: <Task /> },
      { path: "/calendar", exact: true, element: <Calendars /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/reset", exact: true, element: <Resetpassword /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/users/new", exact: true, element: <New /> },
      {path: "/TasksList",exact:true,element: <ListeTasks/>}

    ],
  },
];
export default ThemeRoutes;
