import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
// import pizzas from "./assets/pizzas.json";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);
  // COMPONENTS STATE
  const [activeIndx, setActive] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://63fe042bcd13ced3d7c47f84.mockapi.io/items?category=${activeIndx}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, [activeIndx]);

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeIndx={activeIndx} setActive={(i)=>setActive(i)}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isloading
          ? [...new Array(8)].map((_, idx) => <Skeleton key={idx} />)
          : pizzas.map((obj, i) => (
              <PizzaBlock key={obj.title + obj.id} {...obj} />
            ))}
      </div>
    </div>
  );
};

export default Home;
