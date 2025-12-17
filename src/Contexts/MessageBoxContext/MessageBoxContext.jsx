import { createContext, useState } from 'react'

export const MessageBoxContext = createContext();

function MessageBoxContextProvider({ children }) {

    // state que maneja el text y avatar de messagebox
    const [MessageBoxTextAndAvatar, setMessageBoxText] = useState(1);

    // state que maneja los mensajes de messagebox
    const [MessageBoxMessages, setMessageBoxMessages] = useState([]);

    // objeto que contiene los states y funciones para manejarlos
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