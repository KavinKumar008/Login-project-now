import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import HeaderBar from "../HeaderBar";
import PaginationBar from "../paginationbar/PaginationBar";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([0]);

  async function getUserDetails() {
    let page = 1;

    try {
      let response = await axios.get(
        `https://sps.ragunanthan.in/api/test/userDetails?page=${currentPage}`
      );
      if (response.status === 200) {
        // console.log(response.data.data);
        setApiData(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [currentPage]);

  console.log(apiData);
  return (
    <div>
      <HeaderBar />
      <>
        {apiData.map((item, i) => (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </>
      <PaginationBar
        nPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
      />
    </div>
  );
};

export default HomePage;
