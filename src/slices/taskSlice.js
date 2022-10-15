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
          const response=  await axios.post('https://teams-back.mobelite.fr/api/task/addTask/',task,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          console.log("response",response.data); 
   
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
       

    })
    export const getTask = createAsyncThunk('tasks/getTask',async(id,{rejectWithValue})=>{
        try {
            const response=  await axios.get('https://teams-back.mobelite.fr/api/task/',{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
              return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    })
    export const getTaskByproject = createAsyncThunk('tasks/getTaskByProject',async(id,{rejectWithValue})=>{
        try {
            const response=  await axios.get('https://teams-back.mobelite.fr/api/task/getTaskByProject/'+id,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
              return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    })
    export const updateTask = createAsyncThunk('tasks/updateTask',async(task,{rejectWithValue,dispatch})=>{
        try {
            await axios.put('https://teams-back.mobelite.fr/api/task/',task,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
              return dispatch(getTask())
    
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    })
    export const updateTaskeByName = createAsyncThunk('tasks/updateTaskByName',async(task,{rejectWithValue,dispatch})=>{
        try {
            await axios.put('https://teams-back.mobelite.fr/api/task/update/'+task.title,{etat:task.columnName},{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            return dispatch(getTask())

    
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
        },
        [getTask.pending]:(state,action)=>{
            return {
                ...state,
                addTodoStatus: "",
                addtodoError: "",
                getTodoStatus: "pending",
                gettodoError: "",
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        },
        [getTask.fulfilled]:(state,action)=>{
            return {
                ...state,
                tasks:action.payload,
                addTodoStatus: "",
                addtodoError: "",
                getTodoStatus: "success",
                gettodoError: "",
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        },
        [getTask.rejected]:(state,action)=>{
            return {
                ...state,
                addTodoStatus: "",
                addtodoError: "",
                getTodoStatus: "rejected",
                gettodoError: action.payload,
                updateTodoStatus: "",
                updatetodoError: "",
                deletTodoStatus: "",
                delettodoError: "",
            }
        },
    }

})
export default taskSlice.reducer;