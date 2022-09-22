import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import taskReducer from "./slices/taskSlice";
import usersReducer from "./slices/userSlice";
import projectsReducer from "./slices/projectSlice"
import calandersReducer from "./slices/calanderSlice"
const store = configureStore({
    reducer:{
        auth : authReducer,
        users: usersReducer,
        tasks: taskReducer,
        projects: projectsReducer,
        calanders:calandersReducer
    }
})
export default store