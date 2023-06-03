import React from "react";
import {
  AttachmentICon,
  EmojiIcon,
  SendICon,
  SoundIcon,
} from "../common/Icons";
import { useChatProvider } from "../provider/ChatProvider";
// import EmojiPicker from 'emoji-picker-react';

const UserViewFooter = ({ chatArray, setChatArray, userData }) => {
  const { userInputValue, setUserInputValue, setFileUpload, fileUpload } =
    useChatProvider();

  const imageUploadHandler = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setFileUpload(imageUrl);
  };


  const chatHandler = () => {
    chatArray && chatArray.push({ img: fileUpload });
    chatArray && chatArray.push({ name: userInputValue });
    setChatArray(chatArray);
    setUserInputValue("");
  };

  return (
    <div className="bg-light_black w-full  absolute bottom-0">
      <div className=" px-4 py-3">
        <div className="flex items-center">
          <span className="mr-2 cursor-pointer">
            <EmojiIcon />
          </span>
          <label for="upload-photo">
            <span className=" cursor-pointer">
              <AttachmentICon />
            </span>
          </label>
          <input
            type="file"
            hidden
            name="photo"
            onChange={(e) => imageUploadHandler(e.target.files[0])}
            id="upload-photo"
          />
          <input
            value={userInputValue}
            onChange={(e) => setUserInputValue(e.target.value)}
            type="text"
            className="bg-dark text-white p-2 w-full ff_opensans font-normal text-base  outline-none ms-3  pl-5 rounded-lg"
            placeholder="Search or start new chat"
          />
          <span className="ms-2 cursor">
            {userInputValue.length > 0 ? (
              <span className="cursor-pointer" onClick={() => chatHandler()}>
                <SendICon />
              </span>
            ) : (
              <SoundIcon />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserViewFooter;
