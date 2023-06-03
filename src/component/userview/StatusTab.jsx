import React, { useState } from "react";
import { StatusData } from "../common/Helper";
import { useChatProvider } from "../provider/ChatProvider";

const StatusTab = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { setStatusClickValue, setStatusData, statusData } = useChatProvider();

  const StatusDataHandler = (item) => {
    setStatusData(item);
    setStatusClickValue(true);
  };
  return (
    <div className="md:w-[665px] w-full h-full bg-light_black overflow-hidden ">
      <div className="overflow-auto status_chat  h-full">
        {StatusData.map((value, i) => {
          return (
            <div
              className="mt-3 px-4 py-2 cursor-pointer hover:bg-light_black"
              onClick={() => StatusDataHandler(value)}
              key={i}
            >
              <div
                className=" flex items-center"
                onClick={() => setIsClicked(true)}
              >
                <span className="rounded-[50%] ">
                  <img
                    className={`w-[40px] h-[40px] object-cover rounded-[50%] ${
                      isClicked
                        ? "  focus:border-gray-500 border p-1"
                        : "border-[2px] border-green p-1 "
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
// import React, { useState } from "react";
// import { StatusData } from "../common/Helper";
// import { useChatProvider } from "../provider/ChatProvider";

// const StatusTab = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   const { setStatusClickValue, setStatusData, statusData } = useChatProvider();

//   const StatusDataHandler = (item) => {
//     setStatusData(item);
//     setStatusClickValue(true);
//   };
//   return (
//     <div className="md:w-[665px] w-full h-full bg-light_black overflow-hidden ">
//       <div className="overflow-auto status_chat  h-full">
//         {StatusData.map((value, i, index) => {
//           return (
//             <div
//               className="mt-3 px-4 py-2 cursor-pointer hover:bg-light_black"
//               onClick={() => StatusDataHandler(value)}
//               key={i}
//             >
//               <div
//                 key={index}
//                 className={` flex items-center ${
//                   activeTab === 2 ? "" : "border-gray-300"
//                 }`}
//                 onClick={() => handleTabClick(2)}
//               >
//                 <span
//                   key={index}
//                   className={` w-10 h-10 rounded-[50%] border-green border-[2px] p-1 ${
//                     activeTab === 2 ? " border-gray-300 " : ""
//                   }`}
//                 >
//                   <img
//                     className="rounded-[50%]"
//                     src={value.image}
//                     alt="images"
//                   />
//                 </span>
//                 <div className="flex items-center justify-between w-full pb-2 border-b transition-all ease-in-out duration-300">
//                   <div>
//                     <h2 className="pl-3 text-white font-semibold ff_opensans text-lg">
//                       {value.name}
//                     </h2>
//                     <p className="pl-3 text-white font-light  ff_opensans text-sm">
//                       {value.para}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StatusTab;
