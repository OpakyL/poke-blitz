import React from "react";
import cl from "classnames";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      {pages.map((el) => (
        <span
          className={cl("pagination__page", { active: currentPage === el })}
          key={el}
          onClick={() => setCurrentPage(el)}
        >
          {el + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
