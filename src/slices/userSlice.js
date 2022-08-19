import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = []
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{

        }
    }
})
export const loginUser = createAsyncThunk(
    "user/addUser",
    async (user,{rejectWithValue})=>{
        try {
            const token = await axios.post('http://localhost:5000/api/user/register',{
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
export default userSlice.reducer