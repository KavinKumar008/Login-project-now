import React, { useState } from "react";
import styles from "./Style.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const UploadDialog = ({ isDialogOpen, setIsDialogOpen }) => {
  const [storingImage, setStoringImage] = useState(null);
  const [descriptionData, setDescriptionData] = useState("");

  const handleSubmit = () => {
    setIsDialogOpen(false);
    console.log(storingImage);
    console.log(descriptionData);
    setDescriptionData("");
  };

  // console.log(storingImage);

  const fileName = storingImage.name;
  const fileType = storingImage.type;

  console.log(fileName);
  console.log(fileType);

  async function uploadingImage() {
    try {
      const response = await axios.get(
        `https://sps.ragunanthan.in/api/test/generate-presigned-url?fileName=${fileName}&fileType=${fileType}`
      );
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  uploadingImage();

  async function settingApiData() {
    try {
      const response = await axios.put(
        "https://sps.ragunanthan.in/api/userinventoryupload.s3.amazonaws.com/images/1730992298739_batman.jpg?AWSAccessKeyId=AKIAQXPZDL5QOHUKJ5V4&Content-Type=image%2Fjpeg&Expires=1730993298&Signature=1JZc6NN3LuwLKRgOLiOMe8WIXIY%3D",
        { storingImage },
        { headers: { "Content-Type": storingImage.type } }
      );
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  settingApiData();

  return (
    <Dialog.Root open={isDialogOpen}>
      <Dialog.Trigger asChild>{/* <button>hi</button> */}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Showing Data</p>
              <IoClose
                className="cursor-pointer text-lg"
                onClick={() => setIsDialogOpen(false)}
              />
            </div>
          </Dialog.Title>
          <Dialog.Description
            className={styles.Description}
          ></Dialog.Description>
          <section>
            <div className="flex flex-col">
              <label htmlFor="upload">
                <span className="flex text-sm font-bold">Upload</span>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  accept=".jpg"
                  onChange={(e) => {
                    setStoringImage(e.target.files[0]);
                  }}
                  className="mt-1"
                />
              </label>
              <br />
              <label htmlFor="description">
                <span className="text-sm font-bold">Description</span>
                <br />
                <textarea
                  name="description"
                  id="description"
                  cols={50}
                  rows={5}
                  value={descriptionData}
                  onChange={(e) => setDescriptionData(e.target.value)}
                  className="mt-1 border-2 border-black pl-1"
                ></textarea>
              </label>
            </div>
          </section>
          <Dialog.Close>
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="border border-blue-300 p-2 rounded-md text-sm font-bold bg-blue-500 text-white mt-1"
            >
              Submit
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UploadDialog;
