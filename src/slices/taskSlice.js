import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
const   initialState={
    tasks:[],
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
    async(task,{rejctWithValue})=>{
        try {
          const response=  await axios.post('http://localhost:5000/api/task/',task )
          return response.data

        } catch (error) {
            console.log(error);
            return rejctWithValue(error.response.data)
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
                todos:[action.payload,...state.todos],
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