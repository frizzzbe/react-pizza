import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from "./redux/Slices/filterSlice";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";

function Parent({children}) {
  return <div>
    <h1>Заголовок</h1>
    {children}
  </div>
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Parent>Content homie</Parent>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
