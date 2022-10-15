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
        const response = await axios.post('https://teams-back.mobelite.fr/api/project',project,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return response.data
    }catch (error){
        console.log(error);
        return rejectWithValue (error.response.data)
    }
}
)
export const getProject = createAsyncThunk('projects/getProject',async(id,{rejectWithValue})=>{
    try {
        const response=  await axios.get('https://teams-back.mobelite.fr/api/project/',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          return response.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data)
    }
})
export const getProjectbyuser = createAsyncThunk('projects/getProjectbyuser',async(id,{rejectWithValue})=>{
    try {
        const response=axios.get('https://teams-back.mobelite.fr/api/project/getprojectByuser/',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          return response.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data)
    }
})
export const updateProject = createAsyncThunk('projects/updateProject',async(project,{rejectWithValue,dispatch})=>{
    try {
        await axios.put('https://teams-back.mobelite.fr/api/project/',project,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          return dispatch(getProject())

    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data)
    }
})
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
        },
        [getProject.pending]:(state,action)=>{
            return {
                ...state,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "pending",
                getProjectError: "",
                updateProjectStatus: "",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [getProject.fulfilled]:(state,action)=>{
            return {
                ...state,
                projects:action.payload,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "success",
                getProjectError: "",
                updateProjectStatus: "",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [getProject.rejected]:(state,action)=>{
            return {
                ...state,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "rejected",
                getProjectError: action.payload,
                updateProjectStatus: "",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [updateProject.pending]:(state,action)=>{
            return {
                ...state,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "",
                getProjectError: "",
                updateProjectStatus: "pending",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [updateProject.fulfilled]:(state,action)=>{
            return {
                ...state,
                projects:action.payload,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "",
                getProjectError: "",
                updateProjectStatus: "success",
                updateProjectError: "",
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
        [updateProject.rejected]:(state,action)=>{
            return {
                ...state,
                addProjectStatus:"",
                addProjectError:"",
                getProjectStatus: "",
                getProjectError: "",
                updateProjectStatus: "rejected",
                updateProjectError: action.payload,
                deletProjectStatus: "",
                deletProjectError: "",
            }
        },
    }
})
export default projectSlice.reducer;