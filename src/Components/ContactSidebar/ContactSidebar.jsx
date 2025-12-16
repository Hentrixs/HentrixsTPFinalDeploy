/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/
import './ContactSidebar.css';

import { useContext, useEffect } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext';

export default function ContactSidebar() {

    const {
        contactState,
        setContactState,
        loadingContactsState,
        setLoadingContactState,
        loadContactList
    } = useContext(ContactSidebarContext);

    useEffect(
        loadContactList,
        []
    );

    return (
        <aside>
            <ContactSearchForm loadContactList={loadContactList} />
            {/*<a>Crear contacto</a>*/}
            <ContactList />
        </aside>
    );
};