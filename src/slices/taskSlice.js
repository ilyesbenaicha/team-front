import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import baseUrl from "../api/URL"

const   initialState={
        todos:[],
        addTodoStatus: "",
        addtodoError: "",
        getTodoStatus: "",
        gettodoError: "",
        updateTodoStatus: "",
        updatetodoError: "",
        deletTodoStatus: "",
        delettodoError: "",
    };
    export const todoAdd = createAsyncThunk("todos/todoAdd",
    async(todo,{rejctWithValue})=>{
        try {
          const response=  await axios.post(baseUrl + "/api/task" ,todo )
          return response.data
        } catch (error) {
            console.log(error);
            return rejctWithValue(error.response.data)
        }
        

    })
const taskSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:{
        [todoAdd.pending]:(state,action)=>{
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
        [todoAdd.fulfilled]:(state,action)=>{
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
        [todoAdd.rejected]:(state,action)=>{
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