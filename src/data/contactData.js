/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Maria',
        contact_avatar: 'https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg',
        contact_unseen_messages: 5,
        last_message_content: 'testing',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        contact_messages: ["buenos dias, como estas, estoy afuera"]
    },
    {
        contact_id: 2,
        contact_name: 'Juan',
        contact_avatar: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
    {
        contact_id: 3,
        contact_name: 'Axel',
        contact_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp_ByMCZW8m0s3KmAbIENDvR2Zc_HkBJyYw&s',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
    {
        contact_id: 4,
        contact_name: 'Elon',
        contact_avatar: 'https://ucasports.com/images/2025/7/31/Dude_Person.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Nos vemos',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },        
]

export default contact_data