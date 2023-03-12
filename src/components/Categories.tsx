import React from "react";

type CategoriesProps = {
  activeCategoryId: number;
  setCategoryId: (idx: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ activeCategoryId, setCategoryId }) => {
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
              className={activeCategoryId === idx ? "active" : ""}
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
