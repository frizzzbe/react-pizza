import React from "react";
import { setCurrentPage } from "../redux/Slices/filterSlice";
import { useAppDispatch } from "../redux/store";
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
export const Categories: React.FC<CategoriesProps> = React.memo(({ activeCategoryId, setCategoryId }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="categories">
      <ul>
        {categories.map((el, idx) => {
          return (
            <li
              onClick={() => {
                dispatch(setCurrentPage(1));
                setCategoryId(idx);
              }}
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