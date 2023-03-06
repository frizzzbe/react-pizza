import React from "react";
import axios from "axios";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/Slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  }

  React.useEffect(() => {
    const sortParams = [
      { name: "популярности", sort: "rating", order: "desc" },
      { name: "цене ↑", sort: "price", order: "desc" },
      { name: "цене ↓", sort: "price", order: "asc" },
      { name: "алфавиту", sort: "title", order: "asc" },
    ];
    const category = categoryId ? "&category=" + categoryId : "",
      sortBy = sortParams[sort].sort,
      order = sortParams[sort].order,
      search = searchValue ? searchValue.trim() : "";
    setIsLoading(true);
    axios.get(
      search
        ? `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?order=${order}&search=${search}`
        : `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}`
    )
    .then((res) => {
      setPizzas(res.data);
      setIsLoading(false);
    });
  }, [categoryId, sort, searchValue, currentPage]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = pizzas.map((obj, i) => (
    <PizzaBlock key={obj.title + obj.id} {...obj} />
  ));
  const skeletons = [...new Array(8)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategoryId={categoryId}
          setCategoryId={(i) => onClickCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isloading ? skeletons : items}</div>
      <Pagination setCurrentPage={onChangePage} />
    </div>
  );
};

export default Home;
