import { messageData } from '../data/messageData'

// funcion que envia el mensaje
export function sendMessageService(chatid, message) {
    messageData.find((data) => {
        data.id === chatid ?
            data.messages.push(
                { send_by_me: message, time: "time" }
            ) : data.id
    });
};

//funcion que retorna el chat
export default function messageService(id) {
    return messageData.find((message) => {
        return message.id === id;
    })
};

//funcion que agrega los mensajes a los contactos
export const addMessageToChat = (chatId, message) => {
    const chat = messageData.find(c => c.id === chatId);
    chat.messages.push(message);

};

//funcion que agrega los mensajes a los contactos
export function getContactsWithMessages(contacts) {
    //se agregan los mensajes a los contactos usando map
    return contacts.map((contact) => {
        //se busca el chat que corresponde al contacto
        const chat = messageData.find((m) => { // messageData importado
            return m.id === contact.contact_id
            // retorna el chat si el id del chat es igual al id del contacto
        });

        //se busca el ultimo mensaje del chat
        let lastTime = '';
        if (chat && chat.messages.length > 0) {
            lastTime = chat.messages[chat.messages.length - 1].time;
            // retorna el ultimo mensaje del chat
        }

        //se retorna el contacto con el ultimo mensaje
        return {
            ...contact,
            last_message_time: lastTime
            // porque aca retorna obj en vez de array? 
        };
    });
};