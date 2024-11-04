import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    sessionStorage.removeItem("access-Token");
    navigate("/");
  };
  return (
    <main className="bg-stone-500 text-cyan-100 flex justify-between p-4">
      <div className="flex gap-10 cursor-pointer">
        <p>Home</p>
        <p>About Us</p>
        <p>Settings</p>
      </div>
      <div className="flex gap-10 cursor-pointer">
        <button type="button" onClick={handleSubmit}>
          Logout
        </button>
        <p>Privacy</p>
      </div>
    </main>
  );
};

export default HeaderBar;
