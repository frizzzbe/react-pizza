import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { increment15 } from "./redux/Slices/filterSlice";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header/>
        <div className="content">
        <button onClick={() => dispatch(increment15())}>GinGER{count}</button>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
