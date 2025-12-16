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

