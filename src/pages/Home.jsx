import React from "react";
import { SearchContext } from "../App";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);
  // COMPONENTS STATE
  const [activeCategoryId, setCategoryId] = React.useState(0);
  const [selectedSort, setSort] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const sortParams = [
      { name: "популярности", sort: "rating", order: "desc" },
      { name: "цене ↑", sort: "price", order: "desc" },
      { name: "цене ↓", sort: "price", order: "asc" },
      { name: "алфавиту", sort: "title", order: "asc" },
    ];
    const category = activeCategoryId ? "&category=" + activeCategoryId : "",
      sortBy = sortParams[selectedSort].sort,
      order = sortParams[selectedSort].order,
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
  }, [activeCategoryId, selectedSort, searchValue, currentPage]);

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
          setCategoryId={(i) => setCategoryId(i)}
        />
        <Sort selectedSort={selectedSort} setSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isloading ? skeletons : items}</div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;