import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import car from "./assets/car.png";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function userDetails() {
    try {
      const response = await axios.post(
        "https://sps.ragunanthan.in/api/auth/logIn",
        { Email: "sivasankarsivakumarsak@gmail.com", password: "Test@1234" }
      );
      if (response.status === 200) {
        sessionStorage.setItem("access-Token", response.data.data.accessToken);
        navigate("/header");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   userDetails();
  // }, []);
  const handleSubmit = () => {
    navigate("/homePage");
    setTimeout(() => {
      userDetails();
    }, 5000);
    console.log("hiiii");
  };
  console.log(car);
  return (
    <main className=" flex justify-between flex-col sm:flex-row">
      <section className="w-full h-screen flex justify-center items-center flex-col ">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <div className="w-96 max-w-full">
            <label htmlFor="email">
              <p className="text-xs font-bold text-gray-300">Mail Id</p>
              <input
                type="email"
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-3 py-1.5 border boreder-indigo-600 rounded-md outline-none mb-6"
              />
            </label>
            <div className="relative">
              <label htmlFor="">
                <p className="text-xs font-bold text-gray-300">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3 py-1.5 border boreder-indigo-600 rounded-md outline-none"
                />
                <FaRegEyeSlash className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3  mt-2" />
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full border-none outline-none bg-blue-600 text-white rounded-2xl py-1.5 font-bold"
          >
            Login
          </button>
        </div>
      </section>
      <section
        className="w-full h-screen"
        style={{ backgroundImage: `url(${car})`, backgroundSize: "cover" }}
      ></section>
    </main>
  );
};

export default LoginPage;
