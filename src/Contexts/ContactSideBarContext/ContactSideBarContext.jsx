import { createContext, useState } from "react";
import { getContactList } from "../../services/contactService";
import { getContactsWithMessages } from "../../services/messageService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({ children }) {

    const [contactState, setContactState] = useState([]);
    const [loadingContactsState, setLoadingContactState] = useState(true);

    function loadContactList(filter = "All") {
        setLoadingContactState(true)
        let contact_list

        filter === "All" ?
            contact_list = getContactList() :
            contact_list = getContactList(filter)

        contact_list = getContactsWithMessages(contact_list);
        console.log(contact_list);
        setContactState(contact_list)
        setLoadingContactState(false)
    };

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