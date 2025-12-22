import { createContext, useState, useRef } from "react";
import { getContactList } from "../../services/contactService";
import { getContactsWithMessages } from "../../services/messageService";
import { getContactById } from "../../services/contactService";
import { getContactListBySearch } from "../../services/contactService";

export const ContactSidebarContext = createContext();

function ContactSidebarContextProvider({ children }) {

    //Lista de contactos y seter de lista de contactos
    const [contactState, setContactState] = useState([]);

    // Estado de loading de contactos y seter de loading de contactos
    const [loadingContactsState, setLoadingContactState] = useState(true);
    const [activefilter, setactivefilter] = useState([]);

    const [filterState, setFilterState] = useState([
        {
            id: 1,
            name: "All",
            name_value: true
        },
        {
            id: 2,
            name: "Unread",
            name_value: false
        },
        {
            id: 3,
            name: "Favourites",
            name_value: false
        },
        {
            id: 4,
            name: "Groups",
            name_value: false
        }]);

    const searchRef = useRef("");

    //funcion de carga de contactos
    function loadContactList(filter = null) {
        // Parte del filtro de busqueda
        if (searchRef.current !== "") {
            let filterToUse = filter;
            if (!filterToUse) {
                const active = filterState.find(f => f.name_value === true);
                filterToUse = active ? active.name : "All";
            }
            setLoadingContactState(true)
            const contact_list = getContactsWithMessages(getContactListBySearch(searchRef.current, filterToUse));
            setContactState(contact_list)
            setLoadingContactState(false)
        } else {
            // Parte del contactlist con los botones de filtro
            setLoadingContactState(true)

            let filterToUse = filter;
            if (!filterToUse) {
                const active = filterState.find(f => f.name_value === true);
                filterToUse = active ? active.name : "All";
            }

            const contact_list = getContactsWithMessages(getContactList(filterToUse));

            setContactState(contact_list)
            setLoadingContactState(false)
        }
    };

    // actualiza el filtro
    const updateFilter = (id, filterName) => {
        // Actualizamos el estado
        setFilterState((prev) => {
            return prev.map((item) => {
                return item.id === id ?
                    { ...item, name_value: true } :
                    { ...item, name_value: false }
            })
        })

        // Cargamos la lista
        loadContactList(filterName);
        console.log(filterName);
    };


    const searchcontact = (value) => {
        searchRef.current = value;
        loadContactList();
    };

    // objeto que contiene los states y funciones para manejarlos
    const providerValues = {
        contactState,
        setContactState,
        loadContactList,
        loadingContactsState,
        setLoadingContactState,
        filterState,
        setFilterState,
        updateFilter,
        searchcontact,
    };

    return (
        <ContactSidebarContext.Provider value={providerValues}>
            {children}
        </ContactSidebarContext.Provider>
    );
}

export default ContactSidebarContextProvider;
