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
export const deletUser = createAsyncThunk("user/deletUser",
async(_id,{rejectWithValue})=>{ 
    console.log(_id);
    try {
      const response=  await axios.delete('http://localhost:5000/api/user/'+_id,{
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
    },
        [deletUser.pending]:(state,action)=>{
            return {
                ...state,
                addUserStatus:"",
                addUserError:"",
                getUserStatus: "",
                getUserError: "",
                updateUserStatus: "",
                updateUserError: "",
                deletUserStatus: "pending",
                deletUserError: "",
            }
        },
        [deletUser.fulfilled]:(state,action)=>{
            const currentUser = state.users.filter((user)=>
            user._id !== action.payload._id 
            );
            return {
                ...state,
                
                users:currentUser,
                addUserStatus:"",
                addUserError:"",
                getUserStatus: "",
                getUserError: "",
                updateUserStatus: "",
                updateUserError: "",
                deletUserStatus: "success",
                deletUserError: "",
            }
        },
        [deletUser.rejected]:(state,action)=>{
            return {
                ...state,
                addUserStatus:"",
    addUserError:"",
    getUserStatus: "",
    getUserError: "",
    updateUserStatus: "",
    updateUserError: "",
    deletUserStatus: "rejected",
    deletUserError: action.payload,
            }}

      }  })


export default userSlice.reducer