import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState= {
    projects:[],
    token : localStorage.getItem("token"),
    addProjectStatus: "",
    addProjectError: "",
    getProjectStatus: "",
    getProjectError: "",
    updateProjectStatus: "",
    updateProjectError: "",
    deletProjectStatus: "",
    deletProjectError: "",
};
export const addProject = createAsyncThunk("project/addProject",
async (project,{rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:5000/api/project/',project,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return response.data
    }catch (error){
        console.log(error);
        return rejectWithValue (error.response.data)
    }
}
)
const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers:{},
    extraReducers:{
        [addProject.pending]:(state,action)=>{
            return{
                ...state,
                addProjectStatus:"pending",
                addProjectError:"",
                getProjectStatus:"",
                getProjectError:"",
                updateProjectStatus:"",
                updateProjectError:"",
                deletProjectStatus:"",
                deletProjectError:"",
            }
        },
        [addProject.fulfilled]:(state,action)=>{
            return {
                ...state,
                projects:[action.paylod, ...state.projects],
                addProjectStatus:"success",
                addProjectError:"",
                getProjectStatus: "",
                getProjectError: "",
                updateProjectStatus: "",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [addProject.rejcted]:(state,action)=>{
            return{
                ...state,
                addProjectStatus:"rejcted",
                addProjectError:action.paylod,
                getProjectStatus: "",
                getProjectError: "",
                updateProjectStatus: "",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        }
    }
})
export default projectSlice.reducer;