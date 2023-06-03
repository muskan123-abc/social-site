import React, { useState } from "react";
import UserViewHeader from "./UserViewHeader";
import UserViewFooter from "./UserViewFooter";
import WhatshapWeb from "../../assets/img/png/whtashapweb.png";
import { useChatProvider } from "../provider/ChatProvider";
import PersonalChat from "./PersonalChat";

const UserChat = () => {
  const { userclickValue, userData, setChatArray, chatArray } =
    useChatProvider();

  return (
    <div className="bg-dark w-full relative  sm:block hidden ">
      {userclickValue ? (
        <>
          <div className="flex items-center">
            <UserViewHeader userData={userData} />
          </div>
          <div className="chat_height overflow-auto">
            <PersonalChat setChatArray={setChatArray} chatArray={chatArray} />
          </div>
          <UserViewFooter
            setChatArray={setChatArray}
            chatArray={chatArray}
            userData={userData}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-white h-full px-4">
          <img className="w-[250px]" src={WhatshapWeb} alt="whtashap" />
          <h2 className="ff_opensans font-semibold text-2xl lg:text-4xl xl:text-5xl mt-9">
            Whatsapp WEb
          </h2>
          <p className="mb-0 ff_opensans font-light text-sm xl:text-base text-center mt-8">
            Send and recieve messages without keeping your phone online.
          </p>
          <p className="mb-0 ff_opensans font-light text-sm xl:text-base text-center mt-1">
            Use whatshap on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserChat;
