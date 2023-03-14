import { RootState } from './../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from '../../utils/cartFromLocalstor';

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  type: string;
  size: number;
}
// интерфейс тпизирует только объекты, 
// используется для описания сложных структур данных
interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItemType[];
}

const initialState: CartSliceState = {
  totalPrice: getCartFromLS().totalPrice || 0,
  totalCount: getCartFromLS().totalCount || 0,
  items: getCartFromLS().items || [],
}

const updateData = (state: CartSliceState) => {
  // обновление цены
  state.totalPrice = state.items.reduce((sum, obj)=>{
    return obj.price * obj.count + sum
  }, 0)
  // обновление количества продуктов
  state.totalCount = state.items.reduce((sum, obj)=>{
    return obj.count + sum
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj)=>obj.id === action.payload.id);
      if (findItem) {
        if(action.payload.type && action.payload.size) {
          findItem.type = action.payload.type;
          findItem.size = action.payload.size;
        };
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      updateData(state);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj)=>obj.id === action.payload);
      if(findItem){findItem.count--;}
      if(findItem && findItem.count < 1){
        state.items = state.items.filter((obj)=>obj.id !== action.payload)
      }
      updateData(state);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj)=>obj.id !== action.payload)
      updateData(state);
    }, 
    clearItems(state) {
      state.items = [];
      updateData(state);
    }, 
  }
});

// Селектор в redux. Помогает сократить код.
// Для того чтобы вытащить стейт из другого комопнента.
export const selectCart = (state: RootState)=>state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj)=>obj.id===id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;