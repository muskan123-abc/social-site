import React from "react";
import { useChatProvider } from "../provider/ChatProvider";
import loading from "../../assets/img/png/loading.png";
const StatusChat = () => {
  const { statusclickValue, statusData } = useChatProvider();
  console.log("statusclickValuestatusclickValue", statusData);
  return (
    <div className="bg-dark w-full relative  sm:block hidden ">
      {statusclickValue ? (
        <>
          <div className=" h-full overflow-auto flex  items-center justify-center ">
            <img className="w-[650px]" src={statusData.image} alt="whtashap" />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-white h-full px-4">
          <img className="w-[200px]" src={loading} alt="loading" />
          <h2 className="ff_opensans font-semibold text-2xl  mt-8 ">
            click on a contact to view their status updates
          </h2>
        </div>
      )}
    </div>
  );
};

export default StatusChat;
