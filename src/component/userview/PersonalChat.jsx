import React from "react";
import { DeleteICon, NoData } from "../common/Icons";
import tick from "../../assets/img/png/tick.png";
const PersonalChat = ({ chatArray }) => {
  console.log("chatArraychatArray", chatArray);
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
                    <span className="mt-7 cursor-pointer">
                      <DeleteICon />
                    </span>
                  </div>

                  <div className=" flex flex-col items-end mt-3 ">
                    <div className="bg-light_black border me-5 inline border-light_black rounded-lg px-2 py-1">
                      <span className="flex">
                        <p className="text-white max-w-[200px]   xl:max-w-sm break-words  font-normal text-base  ff_opensans    ">
                          {value.name}
                        </p>
                        <span className="mt-4 ms-1">
                          <img className="w-2 h-2" src={tick} alt="tick" />
                          <img
                            className="w-2 h-2 -mt-2 ms-1"
                            src={tick}
                            alt="tick"
                          />
                        </span>
                      </span>
                    </div>
                    <span className="-mt-2 cursor-pointer">
                      <DeleteICon />
                    </span>
                    {value.img ? (
                      <div
                        className="w-52 h-52 rounded-lg bg-light_black mt-4 p-1"
                        key={i}
                      >
                        <img className="w-full " src={value.img} alt="images" />
                      </div>
                    ) : (
                      ""
                    )}
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
