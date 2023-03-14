// PIZZA SLICE
export type SearchPizzaParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
}
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export type PizzaType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  type: number[];
  size: number[];
}
// интерфейс тпизирует только объекты, 
// используется для описания сложных структур данных
export interface PizzaSliceState {
  items: PizzaType[];
  status: Status;
}

// CART SLICE
export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  type: string;
  size: number;
}
export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItemType[];
}

// FILTER SLICE
export interface FilterSliceType {
  category: number;
  sortBy: number;
  search: string;
  currentPage: number;
}
