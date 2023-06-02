import React from "react";
import TabHeader from "./TabHeader";
import SearchHeader from "./SearchHeader";
import { TabData } from "../common/Helper";
import { useChatProvider } from "../provider/ChatProvider";

const UserTab = () => {
  const { setUserClickValue, setUserData } = useChatProvider();
  const tabHandler = (value) => {
    setUserClickValue(true);
    setUserData(value);
  };

  return (
    <div className="md:w-[665px] w-full h-full bg-dark overflow-hidden ">
      <TabHeader />
      <SearchHeader />
      <div className="overflow-auto sidebar_chat  h-full">
        {TabData.map((value, i) => {
          return (
            <div
              className="mt-3 px-4 py-2 cursor-pointer hover:bg-light_black"
              onClick={() => tabHandler(value)}
              key={i}
            >
              <div className="flex items-center ">
                <img
                  className="w-[40px] h-[40px] rounded-[50%]"
                  src={value.image}
                  alt="images"
                />
                <div className="flex items-center justify-between w-full pb-2 border-b transition-all ease-in-out duration-300">
                  <div>
                    <h2 className="pl-3 text-white font-semibold ff_opensans text-lg">
                      {value.name}
                    </h2>
                    <p className="pl-3 text-white font-light ff_opensans text-base">
                      as
                    </p>
                  </div>
                  <div>
                    <p className="pl-3 text-white font-light  ff_opensans text-xs">
                      {value.time}
                    </p>
                    <p className=" mt-2 flex justify-center w-5 h-5 mb-0  ms-3 text-white font-light  ff_opensans text-xs rounded-full    bg-light_black ">
                      {value.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTab;
