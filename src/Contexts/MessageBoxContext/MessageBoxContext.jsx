import { createContext, useState } from 'react'

export const MessageBoxContext = createContext();

function MessageBoxContextProvider({ children }) {

    const [MessageBoxTextAndAvatar, setMessageBoxText] = useState(1);
    const [MessageBoxMessages, setMessageBoxMessages] = useState([]);

    const ProviderContent = {
        MessageBoxTextAndAvatar,
        setMessageBoxText,
        MessageBoxMessages,
        setMessageBoxMessages
    }

    return (
        <MessageBoxContext.Provider value={ProviderContent}>
            {children}
        </MessageBoxContext.Provider>
    );
};

export default MessageBoxContextProvider;