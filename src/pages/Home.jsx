import React from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters, initialState } from "../redux/Slices/filterSlice";
import { getPizzas } from "../redux/Slices/pizzaSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const {items: pizzas, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { searchValue } = React.useContext(SearchContext);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  }
  const fetchPizzas = async () => {
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
    
    dispatch(getPizzas({category, sortBy, order, search, currentPage}));
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // если есть данные в ссылке, то обновляем redux при первом рендере.
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if(Object.values(params).join() === Object.values(initialState).join()){
        fetchPizzas(); // делаем fetch вручную если данные в ссылке совпадают с начальным состояние redux
      }
      dispatch(setFilters(params));
      isSearch.current = true; // да, пришли параметры из URL 
    }
  }, []);

  // при изменении redux state, делается axios запрос.
  React.useEffect(() => {
    if (!isSearch.current) { 
      fetchPizzas() // делаем запрос только в случае если нет параметров в ссылке
    }
    isSearch.current = false; // при следующем вызове делаем запрос в любом случае
  }, [categoryId, sort, searchValue, currentPage, isSearch]);

  // при изменении redux state, у нас обновляется ссылка страницы.
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          sortProperty: sort.sortProperty,
          categoryId,
          sort,
          currentPage,
        },
        { addQueryPrefix: true }
      );
      navigate(queryString);
    }
    isMounted.current = true; // данный блок кода отработает только со второго рендера
  }, [categoryId, sort, currentPage, navigate]);

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
      {status === "error" ? (
        <div className="content__error-info">
          <h2>
            Не грузится <span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить питсы.
            <br />
            Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : items}
        </div>
      )}

      <Pagination page={currentPage} setCurrentPage={onChangePage} />
    </div>
  );
};

export default Home;
