import { messageData } from '../data/messageData'

export function sendMessageService(chatid, message) {
    messageData.find((data) => {
        data.id === chatid ?
            data.messages.push(
                { send_by_me: message, time: "time" }
            ) : data.id
    });
};

export default function messageService(id) {
    return messageData.find((message) => {
        return message.id === id;
    })
}

export const addMessageToChat = (chatId, message) => {
    const chat = messageData.find(c => c.id === chatId);
    chat.messages.push(message);

    console.log(chat.messages);
}

export function getContactsWithMessages(contacts) {
    return contacts.map((contact) => {
        const chat = messageData.find((m) => {
            return m.id === contact.contact_id
        });

        let lastTime = '';
        if (chat && chat.messages.length > 0) {
            lastTime = chat.messages[chat.messages.length - 1].time;
        }

        return {
            ...contact,
            last_message_time: lastTime
        };
    });
}