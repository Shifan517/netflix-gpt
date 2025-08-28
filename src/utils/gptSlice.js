import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        }
    }
})

export const{toggleGptSearchView} = gptSlice.actions
export default gptSlice.reducer