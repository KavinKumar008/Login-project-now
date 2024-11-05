import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadDialog from "./uploadDailog/UploadDialog";

const HeaderBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        <button type="button" onClick={() => setIsDialogOpen(true)}>
          Upload Image
        </button>
        <button type="button" onClick={handleSubmit}>
          Logout
        </button>
      </div>
      <UploadDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </main>
  );
};

export default HeaderBar;
