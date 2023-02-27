import React from "react";

function Categories() {
  const [activeIndx, setActive] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (i) => {
    setActive(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => {
          return (
            <li
              onClick={() => onClickCategory(idx)}
              className={ activeIndx === idx ? "active" : ''  }
              key={el + "" + Math.random()}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
