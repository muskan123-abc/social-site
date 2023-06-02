import React from "react";
import { StatusData } from "../common/Helper";
import { useChatProvider } from "../provider/ChatProvider";

const StatusTab = () => {
  const { setStatusClickValue } = useChatProvider();
  const tabHandler = (value) => {
    // setStatusClickValue(true);
    setStatusClickValue(true);
  };

  return (
    <div className="md:w-[665px] w-full h-full bg-light_black overflow-hidden ">
      <div className="overflow-auto status_chat  h-full">
        {StatusData.map((value, i) => {
          return (
            <div
              className="mt-3 px-4 py-2 cursor-pointer hover:bg-light_black"
              onClick={() => tabHandler()}
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
