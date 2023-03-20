import "./scss/app.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./components/MainLayout";
const Cart = React.lazy(()=>import("./pages/Cart"));
const FullPizza = React.lazy(()=>import("./pages/FullPizza"));

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<MainLayout/>}>
        <Route path="" element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/cart`} element={
          <Suspense fallback={<p>Loading...</p>}>
            <Cart />
          </Suspense>
        } />
        <Route path={`${process.env.PUBLIC_URL}/pizza/:id`} element={
          <Suspense fallback={<p>Loading...</p>}>
            <FullPizza />
          </Suspense>
        } />
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
