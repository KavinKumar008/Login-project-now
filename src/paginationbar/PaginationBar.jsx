import React from "react";

const PaginationBar = ({ currentPage, setCurrentPage, totalPages }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  // console.log(pageNumbers);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // console.log(totalPages);
  return (
    <main className="flex justify-end items-center list-none gap-3">
      <div>
        {currentPage <= 0 ? (
          setCurrentPage(0)
        ) : (
          <button onClick={goToPrevPage}>
            Previous <span className="w-1 ml-2 border border-black"></span>
          </button>
        )}
      </div>
      {pageNumbers.map((pgNumber) => (
        <li key={pgNumber}>
          <button onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</button>
        </li>
      ))}

      <div>
        {currentPage !== totalPages && (
          <button onClick={goToNextPage}>Next</button>
        )}
      </div>
    </main>
  );
};

export default PaginationBar;
