import contact_data from "../data/contactData";

// obtiene la lista de contactos usando filtros
export function getContactList(filter = "All") {
    /* En un futuro esta funcion haria la llamada al servidor */
    return filter === "Unread"
        ? contact_data.filter((contact) => contact.contact_unseen_messages > 1)
        : filter === "Favourites"
            ? contact_data.filter((contact) => contact.contact_favorite === true)
            : filter === "Groups"
                ? contact_data.filter((contact) => contact.is_group === true)
                : contact_data;
}

// obtiene un contacto por su id
export function getContactById(contact_id) {
    for (const contact of contact_data) {
        if (Number(contact.contact_id) === Number(contact_id)) {
            return contact;
        }
    }
}