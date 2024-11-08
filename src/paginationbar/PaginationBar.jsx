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
    <main className="flex justify-end items-center list-none gap-3 bg-[#5eead4]">
      <div>
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-blue-600 border-blue-600 hover:bg-blue-100"
          }`}
        >
          Previous
        </button>
      </div>
      {pageNumbers.map((pgNumber, index) => (
        <li key={index}>
          <button
            onClick={() => setCurrentPage(pgNumber)}
            className={`px-3 py-1 rounded border ${
              pgNumber === currentPage
                ? "bg-blue-600 text-white border-blue-600"
                : "text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {pgNumber}
          </button>
        </li>
      ))}

      <div>
        {/* {currentPage !== totalPages && ( */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-blue-600 border-blue-600 hover:bg-blue-100"
          }`}
        >
          Next
        </button>
        {/* )} */}
      </div>
    </main>
  );
};

export default PaginationBar;
