import React from "react";
import { DeleteICon } from "../common/Icons";
// import { useChatProvider } from "../provider/ChatProvider";
const PersonalChat = ({ chatArray }) => {
  // const { chatValue } = useChatProvider();

  return (
    <div className="overflow-auto sidebar_chat  h-full bg-whatshap-background bg-no-repeat bg-cover ">
      {chatArray.length > 0 ? (
        <>
          {chatArray.map((value, i) => {
            // <div className=" max-w-[100px] md:max-w-[200px]" key={i}>
            //   <img src={value.image} alt="images" />
            // </div>

            return (
              <div className="p-10 " key={i}>
                <div className="flex items-center">
                  <div className=" flex flex-col items-start ">
                    <p className="text-white max-w-[200px]  xl:max-w-sm break-words w-auto ff_opensans font-normal text-base bg-light_black border  inline  border-light_black   px-2 py-1 rounded-lg">
                      hlo
                    </p>
                  </div>
                  <DeleteICon />
                </div>
                <div className=" flex flex-col items-end mt-3 ">
                  <p className="text-white max-w-[200px]  ms-5 xl:max-w-sm break-words  font-normal text-base  ff_opensans bg-light_black border  inline border-light_black   px-2 py-1 rounded-lg">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonalChat;
