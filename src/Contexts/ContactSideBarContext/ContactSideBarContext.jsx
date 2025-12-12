import { createContext, useState } from "react";
import { getContactList } from "../../services/contactService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({children}) {

    const [contactState, setContactState] = useState([]);
    const [loadingContactsState, setLoadingContactState] = useState(true);

    function loadContactList(filter = "All") {
        setLoadingContactState(true)

        setTimeout(
            function () {
                let contact_list
                if (filter === "Unread") {
                    contact_list = getContactList("Unread");
                } else if (filter === "All") {
                    contact_list = getContactList();
                } else if (filter === "Favourites") {
                    contact_list = getContactList("Favourites");
                }

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
    
    return(
        <ContactSidebarContext.Provider value={providerValues}>
            {children}
        </ContactSidebarContext.Provider>
    );
}

export default ContactSidebarContextProvider;