import React, { useState } from "react";
import { StatusData } from "../common/Helper";
import { useChatProvider } from "../provider/ChatProvider";

const StatusTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const { setStatusClickValue, setStatusData, statusData } = useChatProvider();

  const StatusDataHandler = (item) => {
    console.log("itemitemitem", item);
    setStatusData(item);
    setStatusClickValue(true);
  };
  return (
    <div className="md:w-[665px] w-full h-full bg-light_black overflow-hidden ">
      <div className="overflow-auto status_chat  h-full">
        {StatusData.map((value, i, tab) => {
          return (
            <div
              className="mt-3 px-4 py-2 cursor-pointer hover:bg-light_black"
              onClick={() => StatusDataHandler(value)}
              key={i}
            >
              <div
                className="tab flex items-center "
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="rounded-[50%] border-[2px] border-green p-1 ">
                  <img
                    className={`w-[40px] rounded-[50%]  ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    src={value.image}
                    alt="images"
                  />
                </span>
                <div className="flex items-center justify-between w-full pb-2 border-b transition-all ease-in-out duration-300">
                  <div>
                    <h2 className="pl-3 text-white font-semibold ff_opensans text-lg">
                      {value.name}
                    </h2>
                    <p className="pl-3 text-white font-light  ff_opensans text-sm">
                      {value.para}
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

export default StatusTab;
