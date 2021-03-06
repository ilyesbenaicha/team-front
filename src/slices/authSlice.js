import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
const initialState={
    token : localStorage.getItem("token"),
    email : "",
    role : "",
    _id: "",
    loginStatus : "",
    loginError : "",
    userLoaded : false ,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
builder.addCase(loginUser.pending,(state)=>{
return {
    ...state,
    loginStatus:"pending"
}
})
builder.addCase(loginUser.fulfilled,(state,action)=>{
    if (action.payload) {
let user = jwtDecode(action.payload.token)
        return {
            ...state,
            token: action.payload.token,
            email : user.email,
            password: user.password,
            role : user.role,
            loginStatus : "success"
        }
    }else return state
})
builder.addCase(loginUser.rejected,(state,action)=>{
    return {
        ...state,
        loginStatus : "rejected",
        loginError : action.payload
    }
})
    }

    
});
export default authSlice.reducer
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (user,{rejectWithValue})=>{
        try {
            const token = await axios.post('http://localhost:5000/api/user/login',{
                email : user.email,
                password : user.password,
                role : user.role

            }) ;
            console.log("token data =");

            console.log(token.data.token);
            localStorage.setItem("token",token.data.token);
            return token.data
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)
