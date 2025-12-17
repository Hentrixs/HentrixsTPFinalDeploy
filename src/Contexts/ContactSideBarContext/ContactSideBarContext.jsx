import { createContext, useState } from "react";
import { getContactList } from "../../services/contactService";
import { getContactsWithMessages } from "../../services/messageService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({ children }) {

    //Lista de contactos y seter de lista de contactos
    const [contactState, setContactState] = useState([]);

    // Estado de loading de contactos y seter de loading de contactos
    const [loadingContactsState, setLoadingContactState] = useState(true);

    // funcion de carga de contactos
    function loadContactList(filter = "All") {
        //estado de carga en true y se crea contact_list
        setLoadingContactState(true)
        let contact_list

        //se filtra la lista de contactos usando getContactlist()
        filter === "All" ?
            contact_list = getContactList() :
            contact_list = getContactList(filter)

        //se agregan los mensajes a los contactos usando 
        //getContactsWithMessages(contact_list)
        contact_list = getContactsWithMessages(contact_list);
        setContactState(contact_list)
        setLoadingContactState(false)

    };

    // objeto que contiene los states y funciones para manejarlos
    const providerValues = {
        contactState,
        setContactState,
        loadContactList,
        loadingContactsState,
        setLoadingContactState
    };

    return (
        <ContactSidebarContext.Provider value={providerValues}>
            {children}
        </ContactSidebarContext.Provider>
    );
}

export default ContactSidebarContextProvider;