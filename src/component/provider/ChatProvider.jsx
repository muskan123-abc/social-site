import { createContext, useContext, useState } from "react";

const ChatProviderContext = createContext();

export function useChatProvider() {
  return useContext(ChatProviderContext);
}
export default function UserChatProvider({ children }) {
  const [userInputValue, setUserInputValue] = useState("");
  const value = {
    setUserInputValue,
    userInputValue
};
return(
    <ChatProviderContext.Provider value={value}>
        {children}
    </ChatProviderContext.Provider>
)
}
