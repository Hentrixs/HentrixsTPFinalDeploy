import contact_data from "../data/contactData";

export function getContactList (filter = "all"){
    /* En un futuro esta funcion haria la llamada al servidor */
    switch(filter) {
        case "all":
            return contact_data
            break
        case "unread":
            return contact_data.filter((contact) => {
                return contact.contact_unseen_messages > 1 ;
            })
            break
        case "favourites":
            return contact_data.filter((contact) => {
                return contact.contact_favorite === true;
            })
            break
    }
}

export function getContactById (contact_id) {
    for(const contact of contact_data){
        if(Number(contact.contact_id) === Number(contact_id)){
            return contact
        }
    }
}
