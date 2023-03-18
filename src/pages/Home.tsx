import React from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { setCategoryId, setCurrentPage, setFilters, initialState, selectFilter } from "../redux/Slices/filterSlice";
import { getPizzas, selectPizzaData } from "../redux/Slices/pizzaSlice";
import { SearchPizzaParams, FilterSliceType } from '../redux/Slices/sliceTypes';
// import Components from reExport
import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from "../components/reExport";
// import pizzas from "./assets/pizzas.json";

const Home: React.FC = () => {
  const { category, sortBy, currentPage, search } = useSelector(selectFilter);
  const {items: pizzas, status } = useSelector(selectPizzaData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const onClickCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
    // axios.get(`https://63fe042bcd13ced3d7c47f84.mockapi.io/items`).then(({data}) => console.log(data.length));
  }, []);
  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  }
  const fetchPizzas = async () => {
    const sortParams = [
      { name: "популярности", sort: "rating", order: "desc" },
      { name: "цене ↑", sort: "price", order: "desc" },
      { name: "цене ↓", sort: "price", order: "asc" },
      { name: "алфавиту", sort: "title", order: "asc" },
    ];
    const categoryParam = (category > 0) ? "&category=" + category : "",
      sortParam = sortParams[sortBy].sort,
      order = sortParams[sortBy].order,
      searchParam = search ? search.trim() : "";

    dispatch(getPizzas({
      category: categoryParam, 
      sortBy: sortParam, 
      order, 
      search: searchParam, 
      currentPage: String(currentPage)
    }));
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // если есть данные в ссылке, то обновляем redux при первом рендере.
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1))) as unknown as SearchPizzaParams;
      if(Object.values(params).join('') === Object.values(initialState).join('')){
        fetchPizzas(); // делаем fetch вручную если данные в ссылке совпадают с начальным состояние redux
      }
      dispatch(setFilters({
        category: Number(params.category),
        currentPage: Number(params.currentPage),
        sortBy: Number(params.sortBy),
      } as unknown as FilterSliceType));
      isSearch.current = true; // да, пришли параметры из URL 
    }
  }, []);

  // при изменении redux state, делается axios запрос.
  React.useEffect(() => {
    if (!isSearch.current) { 
      fetchPizzas() // делаем запрос только в случае если нет параметров в ссылке
    }
    isSearch.current = false; // при следующем вызове делаем запрос в любом случае
  }, [category, sortBy, search, currentPage, isSearch]);

  // при изменении redux state, у нас обновляется ссылка страницы.
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          category,
          sortBy,
          currentPage,
        },
        { addQueryPrefix: true }
      );
      navigate(queryString);
    }
    isMounted.current = true; // данный блок кода отработает только со второго рендера
  }, [category, sortBy, currentPage, navigate]);

  const items = pizzas.map((obj: any) => (
    <PizzaBlock key={obj.title + obj.id} {...obj} />
  ));
  const skeletons = [...new Array(8)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategoryId={category}
          setCategoryId={onClickCategory}
        />
        <Sort sort={sortBy} />
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
