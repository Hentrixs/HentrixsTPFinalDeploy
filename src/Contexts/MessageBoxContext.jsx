import React, { createContext, useState } from 'react'

export const MessageBoxContext = createContext();

function MessageBoxContextProvider({children}) {
    
    const [MessageBoxTextAndAvatar,setMessageBoxText] = useState(1);

    const ProviderContent = {
        MessageBoxTextAndAvatar,
        setMessageBoxText
    }

    return (
        <MessageBoxContext.Provider value={ProviderContent}>
            {children}
        </MessageBoxContext.Provider>
    );
};

export default MessageBoxContextProvider;