import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json";
// import logo from "./logo.svg";
// console.log(pizzas);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj, i) => (
              <PizzaBlock
                key={obj.title + obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                
              />
            ))}
            {/* <PizzaBlock title="Чизбургер-пицца" price="390"/>
            <PizzaBlock title="Супер-пицца" price="490"/>
            <PizzaBlock title="Армянская пицца" price="350"/>
            <PizzaBlock title="Чили пицца" price="420"/>
            <PizzaBlock title="Черная пицца" price="410"/>
            <PizzaBlock title="Легендарная пицца" price="370"/>
            <PizzaBlock title="Жар-пицца" price="395"/>
            <PizzaBlock title="Пицца ЭКСТРА" price="410"/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
