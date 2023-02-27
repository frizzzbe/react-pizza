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

  const isActive = (i) => {
    if (activeIndx == i) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => {
          return (
            <li
              onClick={() => onClickCategory(idx)}
              className={ activeIndx === idx ? "active" : ''  }
              // className={() => isActive(idx)}
              key={el + "" + Math.random()}
            >
              {el}
            </li>
          );
        })}
        {/* <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
  );
}

export default Categories;
