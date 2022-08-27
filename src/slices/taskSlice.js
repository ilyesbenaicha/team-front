import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
const   initialState={
    tasks:[],
    token : localStorage.getItem("token"),
        addTodoStatus: "",
        addtodoError: "",
        getTodoStatus: "",
        gettodoError: "",
        updateTodoStatus: "",
        updatetodoError: "",
        deletTodoStatus: "",
        delettodoError: "",
    };
    export const addTask = createAsyncThunk("tasks/addTask",
    async(task,{rejectWithValue})=>{
        try {
          const response=  await axios.post('http://localhost:5000/api/task/',task,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          return response.data

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
        

    })
    export const getTask = createAsyncThunk('http://localhost:5000/api/task/',async(id=null,{rejectWithValue})=>{
        try {
            const response=  await axios.post('http://localhost:5000/api/task/',{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
              return response.data
    
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    })
const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{},
    extraReducers:{
        [addTask.pending]:(state,action)=>{
            return {
                ...state,
                addTodoStatus: "pending",
                addtodoError: "",
                getTodoStatus: "",
                gettodoError: "",
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        },
        [addTask.fulfilled]:(state,action)=>{
            return {
                ...state,
                tasks:[action.payload,...state.tasks],
                addTodoStatus: "success",
                addtodoError: "",
                getTodoStatus: "",
                gettodoError: "",
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        },
        [addTask.rejected]:(state,action)=>{
            return {
                ...state,
                addTodoStatus: "rejected",
                addtodoError: action.payload,
                getTodoStatus: "",
                gettodoError: "",
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        }
    }

})
export default taskSlice.reducer;