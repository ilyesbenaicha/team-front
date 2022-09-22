import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    events:[],
    token : localStorage.getItem("token"),
    addCalendarStatus: "",
    addCalendarError: "",
    getCalendarStatus: "",
    getCalendarError: "",
    updateCalendarStatus: "",
    updateCalendarError: "",
    deletCalendarStatus: "",
    deletCalendarError: "",
}
export const addCalander = createAsyncThunk("calander/addCalander",
async (newEvent,{rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:5000/api/calander',newEvent,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return response.data
    }catch (error){
        console.log(error);
        return rejectWithValue (error.response.data)
    }
}
)
export const getCalendar = createAsyncThunk('calanders/getCalender',async(id,{rejectWithValue})=>{
    try {
        const response=  await axios.get('http://localhost:5000/api/calander/',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
          return response.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data)
    }
})
const calanderSlice = createSlice({
    name: "events",
    initialState,
    reducers:{},
    extraReducers:{
        [addCalander.pending]:(state,action)=>{
            return{
                ...state,
                addCalanderStatus:"pending",
                addCalanderError:"",
                getCalendarStatus:"",
                getCalendarError:"",
                updateCalendarStatus:"",
                updateCalendarError:"",
                deletCalendarStatus:"",
                deletCalendarError:"",
            }
        },
        [addCalander.fulfilled]:(state,action)=>{
            return {
                ...state,
                events:[action.paylod, ...state.events],
                addCalanderStatus:"success",
                addCalanderError:"",
                getCalendarStatus: "",
                getCalendarError: "",
                updateCalendarStatus: "",
                updateCalendarError: "",
                deletCalendarStatus: "",
                deletCalendarError: "",
            }
        },
        [addCalander.rejcted]:(state,action)=>{
            return{
                ...state,
                addCalanderStatus:"rejcted",
                addCalanderError:action.paylod,
                getCalendarStatus: "",
                getCalendarError: "",
                updateCalendarStatus: "",
                updateCalendarError: "",
                deletCalendarStatus: "",
                deletCalendarError: "",
            }
        },
        [getCalendar.pending]:(state,action)=>{
            return {
                ...state,
                addCalanderStatus:"",
                addCalanderError:"",
                getCalendarStatus: "pending",
                getCalendarError: "",
                updateCalendarStatus: "",
                updateCalendarError: "",
                deletCalendarStatus: "",
                deletCalendarError: "",
            }
        },
        [getCalendar.fulfilled]:(state,action)=>{
            return {
                ...state,
                events:action.payload,
                addCalanderStatus:"",
                addCalanderError:"",
                getCalendarStatus: "success",
                getCalendarError: "",
                updateCalendarStatus: "",
                updateCalendarError: "",
                deletCalendarStatus: "",
                deletCalendarError: "",
            }
        },
        [getCalendar.rejected]:(state,action)=>{
            return {
                ...state,
                addCalanderStatus:"",
                addCalanderError:"",
                getCalendarStatus: "rejected",
                getCalendarError: action.payload,
                updateCalendarStatus: "",
                updateCalendarError: "",
                deletCalendarStatus: "",
                deletCalendarError: "",
            }
        },
    }
})
export default calanderSlice.reducer;
