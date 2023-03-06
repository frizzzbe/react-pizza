import React from "react";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryId } from "../redux/Slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const activeCategoryId = useSelector((state) => (state.filter.categoryId));
  const sortId = useSelector((state => (state.filter.sort)));
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);
  // COMPONENTS STATE
  const [currentPage, setCurrentPage] = React.useState(1);

  const onClickCategory = (id)=>{
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    const sortParams = [
      { name: "популярности", sort: "rating", order: "desc" },
      { name: "цене ↑", sort: "price", order: "desc" },
      { name: "цене ↓", sort: "price", order: "asc" },
      { name: "алфавиту", sort: "title", order: "asc" },
    ];
    const category = activeCategoryId ? "&category=" + activeCategoryId : "",
      sortBy = sortParams[sortId].sort,
      order = sortParams[sortId].order,
      search = searchValue ? searchValue.trim() : "";
    setIsLoading(true);
    fetch(
      search
        ? `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?order=${order}&search=${search}`
        : `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, [activeCategoryId, sortId, searchValue, currentPage]);

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
          activeCategoryId={activeCategoryId}
          setCategoryId={(i) => onClickCategory(i)}
        />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isloading ? skeletons : items}</div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;