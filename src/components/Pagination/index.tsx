import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PropsCurrentPage = {
  page: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination: React.FC<PropsCurrentPage> = ({ page, setCurrentPage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    previousLabel={
      <svg
        fill="none"
        height="24"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    }
    nextLabel={
      <svg
        fill="none"
        height="24"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    }
    onPageChange={(e) => setCurrentPage(e.selected + 1)}
    pageRangeDisplayed={5}
    pageCount={3}
    forcePage={page - 1}
  />
);
