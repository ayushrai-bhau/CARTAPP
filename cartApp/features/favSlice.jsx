import { createSlice } from "@reduxjs/toolkit"
import productData from "../productData"


const initialState={
    favorite:[],
    items:productData
}

const favSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        addToFav:(state,action)=>{
            let find = state.favorite.findIndex((item)=>item.id === action.payload.id)
            if(find>=0){
                state.favorite[find].quantity+=1
            }
            else state.favorite.push(action.payload)
        },
        removeFavItem:(state,action)=>{
            state.favorite = state.favorite.filter((item)=>item.id!=action.payload)
        }
    }
})
export const {addToFav , removeFavItem} =favSlice.actions
export default favSlice.reducer