import React from "react";
import { DeleteICon, NoData } from "../common/Icons";
import tick from "../../assets/img/png/tick.png";
const PersonalChat = ({ chatArray }) => {
  return (
    <div className="overflow-auto sidebar_chat  h-full bg-whatshap-background bg-no-repeat bg-cover  flex flex-col justify-end">
      {chatArray && chatArray.length > 0 ? (
        <>
          {chatArray &&
            chatArray.map((value, i) => {
              return (
                <div className="p-10 " key={i}>
                  <div className="flex items-center">
                    <div className=" flex flex-col items-start ">
                      <p className="text-white max-w-[200px]  xl:max-w-sm break-words w-auto ff_opensans font-normal text-base bg-light_black border  inline  border-light_black   px-2 py-1 rounded-lg">
                        hlo
                      </p>
                    </div>
                    <span className="mt-7">
                      <DeleteICon />
                    </span>
                  </div>
                  <div className=" flex flex-col items-end mt-3 ">
                    <div className="flex  items-center me-5 bg-light_black border  border-light_black   px-2 py-1 rounded-lg">
                      <p className="text-white me-2 max-w-[200px] xl:max-w-sm break-words  font-normal text-base  ff_opensans ">
                        {value}
                      </p>
                      <span className="mt-2">
                        <img className="w-2 h-2" src={tick} alt="tick" />
                        <img
                          className="w-2 h-2 -mt-2 ms-1"
                          src={tick}
                          alt="tick"
                        />
                      </span>
                    </div>
                    <span className="-mt-2">
                      <DeleteICon />
                    </span>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <NoData />
        </div>
      )}
    </div>
  );
};

export default PersonalChat;
