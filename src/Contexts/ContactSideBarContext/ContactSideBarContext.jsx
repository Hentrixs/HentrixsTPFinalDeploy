import { createContext, useState } from "react";
import { getContactList } from "../../services/contactService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({ children }) {

    const [contactState, setContactState] = useState([]);
    const [loadingContactsState, setLoadingContactState] = useState(true);

    function loadContactList(filter = "All") {
        setLoadingContactState(true)
        setTimeout(
            function () {
                let contact_list
                filter === "All" ?
                    contact_list = getContactList() :
                    contact_list = getContactList(filter)

                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        );
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