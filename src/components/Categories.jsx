import React from "react";

function Categories({activeCategoryId, setCategoryId}) {
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
              onClick={() => setCategoryId(idx)}
              className={ activeCategoryId === idx ? "active" : ''  }
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
