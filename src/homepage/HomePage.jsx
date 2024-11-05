import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import HeaderBar from "../HeaderBar";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);
  async function getUserDetails() {
    let page = 1;
    try {
      let response = await axios.get(
        "https://sps.ragunanthan.in/api/test/userDetails?page=1"
      );
      if (response.status === 200) {
        // console.log(response.data.data);
        setApiData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

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
    </div>
  );
};

export default HomePage;
