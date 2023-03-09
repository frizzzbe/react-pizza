import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addItem(state, action) {
      if(state.items.length !== 0){
        for (const el of state.items) {
          if(el.id === action.payload.id){
            // идентификатор совпадает
            el.count++
            break;
          } else if (state.items[state.items.length-1] === el) {
            // идентификатор не совпадает
            state.items.push(action.payload);
            break;
          }
        }
      } else {
        state.items.push(action.payload)
      }
      state.totalPrice = state.items.reduce((sum, obj)=>{
        return obj.price * obj.count + sum
      }, 0)
    }, 
    removeItem(state, action) {
      state.items.filter((obj)=>obj.id !== action.payload)
    }, 
    clearItems(state) {
      state.items = [];
    }, 
  }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;