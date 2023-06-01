import React from "react";
import UserViewHeader from "./UserViewHeader";
import UserViewFooter from "./UserViewFooter";

const UserChat = () => {
  return (
    <div className="bg-dark w-full relative ">
      <div className="flex items-center">
        <UserViewHeader />
        {/* <div className='text-center w-full text-white '> Whatsapp App</div> */}
      </div>
      <div className="chat_height overflow-auto">
        <p>ggg</p>
      </div>
      <UserViewFooter />
    </div>
  );
};

export default UserChat;
