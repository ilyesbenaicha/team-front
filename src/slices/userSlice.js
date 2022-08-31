import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users:[],
    token : localStorage.getItem("token"),
    addUserStatus:"",
    addUserError:"",
    getUserStatus: "",
    getUserError: "",
    updateUserStatus: "",
    updateUserError: "",
    deletUserStatus: "",
    deletUserError: "",
}
export const addUser = createAsyncThunk("user/addUser",
async(user,{rejectWithValue})=>{
    try {
      const response=  await axios.post('http://localhost:5000/api/user/register',user,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      return response.data

    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data)
    }
})
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:{
        [addUser.pending]:(state,action)=>{
            return {
                ...state,
                addUserStatus:"pending",
                addUserError:"",
                getUserStatus: "",
                getUserError: "",
                updateUserStatus: "",
                updateUserError: "",
                deletUserStatus: "",
                deletUserError: "",
            }
        },
        [addUser.fulfilled]:(state,action)=>{
            return {
                ...state,
                
                users:[action.payload,...state.users],
                addUserStatus:"success",
                addUserError:"",
                getUserStatus: "",
                getUserError: "",
                updateUserStatus: "",
                updateUserError: "",
                deletUserStatus: "",
                deletUserError: "",
            }
        },
        [addUser.rejected]:(state,action)=>{
            return {
                ...state,
                addUserStatus:"rejected",
    addUserError:action.payload,
    getUserStatus: "",
    getUserError: "",
    updateUserStatus: "",
    updateUserError: "",
    deletUserStatus: "",
    deletUserError: "",
            }
    },}
})



export default userSlice.reducer