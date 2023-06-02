import React from "react";
import {
  AttachmentICon,
  EmojiIcon,
  SendICon,
  SoundIcon,
} from "../common/Icons";
import { useChatProvider } from "../provider/ChatProvider";

const UserViewFooter = () => {
  const { userInputValue, setUserInputValue } = useChatProvider();
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
          <input type="file" hidden name="photo" id="upload-photo" />
          <input
            onChange={(e) => setUserInputValue(e.target.value)}
            type="text"
            className="bg-dark text-white p-2 w-full ff_opensans font-normal text-base  outline-none ms-3  pl-5 rounded-lg"
            placeholder="Search or start new chat"
          />
          <span className="ms-2 cursor">
            {userInputValue.length > 0 ? <SendICon /> : <SoundIcon />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserViewFooter;
