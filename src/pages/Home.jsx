import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63fe042bcd13ced3d7c47f84.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isloading
          ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
          : pizzas.map((obj, i) => (
              <PizzaBlock key={obj.title + obj.id} {...obj} />
            ))}
      </div>
    </>
  );
}

export default Home;