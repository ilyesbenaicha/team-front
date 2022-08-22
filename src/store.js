import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import taskReducer from "./slices/taskSlice";
import usersReducer from "./slices/userSlice";
const store = configureStore({
    reducer:{
        auth : authReducer,
        users: usersReducer,
        tasks: taskReducer
    }
})
export default store