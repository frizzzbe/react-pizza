import React from "react";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/Slices/filterSlice";
import { useNavigate } from "react-router-dom";

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  
  // искусственное скоращение вызовов запроса к серверу.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounce = React.useCallback(
    debounce((str)=>dispatch(setSearchValue(str)), 300),
  []);

  // типизация для event (React.ChangeEvent) и 
  // получаем свойство value из <HTMLInputElement>
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    navigate(`${process.env.PUBLIC_URL}/`);
    setInputValue(e.target.value);
    searchDebounce(e.target.value);
  }
  function onClickClear() {
    dispatch(setSearchValue(""));
    setInputValue("");
    searchRef.current?.focus();
  }

  return (
    <div className={styles.root}>
      <input
        ref={searchRef}
        onChange={(e) => onChangeInput(e)}
        value={inputValue}
        className={styles.searchBox}
        type="text"
        placeholder="Поиск пиццы..."
      />
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      {inputValue && (
        <svg
          className={styles.clearIcon}
          onClick={()=>onClickClear()}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          width="18"
          height="18"
        >
          <g>
            <line x1="7" x2="25" y1="7" y2="25" />
            <line x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
      )}
    </div>
  );
};
