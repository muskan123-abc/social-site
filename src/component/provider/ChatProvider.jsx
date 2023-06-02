import { createContext, useContext, useState } from "react";

const ChatProviderContext = createContext();

export function useChatProvider() {
  return useContext(ChatProviderContext);
}
export default function UserChatProvider({ children }) {
  const [userInputValue, setUserInputValue] = useState("");
  const [userclickValue, setUserClickValue] = useState(false);
  const [statusclickValue, setStatusClickValue] = useState(false);
  const [chatValue, setChatValue] = useState(null);
  const [userData, setUserData] = useState({});

  const value = {
    setUserInputValue,
    userInputValue,
    setUserClickValue,
    userclickValue,
    chatValue,
    setChatValue,
    setUserData,
    userData,
    setStatusClickValue,
    statusclickValue,
  };
  return (
    <ChatProviderContext.Provider value={value}>
      {children}
    </ChatProviderContext.Provider>
  );
}
