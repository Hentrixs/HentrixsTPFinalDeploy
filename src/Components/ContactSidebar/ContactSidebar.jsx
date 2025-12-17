/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/
import './ContactSidebar.css';
import { useContext, useEffect } from 'react'
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext';

import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'

export default function ContactSidebar() {

    const { loadContactList } = useContext(ContactSidebarContext);

    //Carga inicial de contactos al montar el provider
    useEffect(
        loadContactList,
        []
    );

    return (
        <aside>
            <ContactSearchForm />
            <ContactList />
        </aside>
    );
};