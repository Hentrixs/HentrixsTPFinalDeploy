import { createContext, useState } from "react";
import { getContactList } from "../../services/contactService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({children}) {

    const [contactState, setContactState] = useState([]);
    const [loadingContactsState, setLoadingContactState] = useState(true);

    function loadContactList(filter = "all") {
        setLoadingContactState(true)

        setTimeout(
            function () {
                let contact_list; 

                if (filter === "unread") {
                    contact_list = getContactList("unread");
                } else if (filter === "all") {
                    contact_list = getContactList();
                } else if (filter === "favourites") {
                    contact_list = getContactList("favourites");
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