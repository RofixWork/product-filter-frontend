import React from "react";
import { Link } from "react-router";

const Pagination = ({ totalPages, pageNumber }) => {
  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center py-3"
    >
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page_number) => {
            return (
              <li
                key={page_number}
                className={`page-item ${
                  +page_number === +pageNumber && "active"
                }`}
              >
                <Link className="page-link" to={`?page=${page_number}`}>
                  {page_number}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
