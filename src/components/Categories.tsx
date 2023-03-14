import React from "react";
// import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

type CategoriesProps = {
  activeCategoryId: number;
  setCategoryId: (idx: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

// React.memo() позволяет не перерисовывать компонент 
// если его данные (пропсы) не изменились
const Categories: React.FC<CategoriesProps> = React.memo(({ activeCategoryId, setCategoryId }) => {
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
});

export default Categories;
