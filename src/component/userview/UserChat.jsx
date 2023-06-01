import React from "react";
import UserViewHeader from "./UserViewHeader";
import UserViewFooter from "./UserViewFooter";
import { useChatProvider } from "../provider/ChatProvider";
import PersonalChat from "./PersonalChat";

const UserChat = () => {
  const { userclickValue, userData } = useChatProvider();
  return (
    <div className="bg-dark w-full relative  sm:block hidden">
      {userclickValue ? (
        <>
          <div className="flex items-center">
            <UserViewHeader userData={userData} />
          </div>
          <div className="chat_height overflow-auto">
            <PersonalChat />
          </div>
          <UserViewFooter />
        </>
      ) : (
        <div className="flex items-center justify-center w-full text-white h-full">
          <p>Whatsapp App</p>
        </div>
      )}
      {/**/}
    </div>
  );
};

export default UserChat;
