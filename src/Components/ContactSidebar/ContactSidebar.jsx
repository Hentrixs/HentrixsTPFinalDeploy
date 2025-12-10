/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/
import './ContactSidebar.css';

import React, { useContext, useEffect, useState } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { getContactList } from '../../services/contactService'
import { ContactSidebarContext } from '../../Contexts/ContactSideBarContext/ContactSideBarContext';

export default function ContactSidebar() {
    
    const {
        contactState,
        setContactState,
        loadingContactsState,
        setLoadingContactState,
        loadContactList
    } = useContext(ContactSidebarContext);

    useEffect (
        loadContactList,
        []
    );
    
    return (
        <aside>
            <div>
                <ContactSearchForm loadContactList={loadContactList}/>
                {/*<a>Crear contacto</a>*/}
            </div>
            <ContactList />
        </aside>
    );
};