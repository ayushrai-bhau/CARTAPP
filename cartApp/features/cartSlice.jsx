import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData"

const initialState ={
    cart:[],
    favorite:[],
    items:productData,
    totalQuantity:0,
    totalPrice:0,
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let find = state.cart.findIndex((item)=> item.id === action.payload.id)
            if(find>=0){
                state.cart[find].quantity+=1
            }
            else state.cart.push(action.payload);
        },

        addToFav:(state,action)=>{
            let find = state.favorite.findIndex((item)=> item.id === action.payload.id)
            if(find>=0){
                state.favorite[find].quantity+=1
            }
            else state.favorite.push(action.payload);
        },
        removeFavItem: (state, action) => {
            state.favorite = state.favorite.filter((item) => item.id !== action.payload);

          },

        getCartTotal: (state) =>{
            let {totalQuantity,totalPrice}= state.cart.reduce(
                (cartTotal , cartItem)=>{
                    console.log("cartTotal",cartTotal);
                    console.log("cartItem",cartItem)
                    const {price ,quantity} =cartItem
                    console.log(price,quantity)
                    const itemTotal = price*quantity
                    cartTotal.totalPrice +=itemTotal
                    cartTotal.totalQuantity+=quantity
                    return cartTotal
                },
                {
                    totalPrice:0,
                    totalQuantity:0,
                }


            )
            state.totalPrice= parseInt(totalPrice.toFixed(2))
            state.totalQuantity=totalQuantity
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);

          },

        increaseItemQuantity:(state , action) =>{
            state.cart= state.cart.map((item)=>{

                if(item.id === action.payload){
                    return{...item, quantity:item.quantity+1}
                    
                }
                return item;
            })
        } ,
        
        decreaseItemQuantity:(state , action) =>{
            state.cart= state.cart.map((item)=>{

                if(item.id === action.payload){
                    return{...item, quantity:item.quantity-1}
                    
                }
                return item;
            })
        }  



    }
})
export const {addToCart , getCartTotal ,removeItem,decreaseItemQuantity,increaseItemQuantity,addToFav,removeFavItem } =cartSlice.actions


export default cartSlice.reducer
