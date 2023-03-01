import React from "react";

function Categories({activeIndx, setActive}) {
  // const [activeIndx, setActive] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => {
          return (
            <li
              onClick={() => setActive(idx)}
              className={ activeIndx === idx ? "active" : ''  }
              key={el + idx}
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
