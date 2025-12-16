/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Juan',
        contact_avatar: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
        contact_unseen_messages: 0,
        contact_favorite: true,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 2,
        contact_name: 'Maria',
        contact_avatar: 'https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg',
        contact_unseen_messages: 5,
        contact_favorite: true,
        last_message_content: 'testing',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        contact_messages: ["buenos dias, como estas, estoy afuera"]
    },
    {
        contact_id: 3,
        contact_name: 'Axel',
        contact_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp_ByMCZW8m0s3KmAbIENDvR2Zc_HkBJyYw&s',
        contact_unseen_messages: 0,
        contact_favorite: true,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 4,
        contact_name: 'Elon',
        contact_avatar: 'https://ucasports.com/images/2025/7/31/Dude_Person.jpg',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'Nos vemos',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 5,
        contact_name: 'Mark Zuckerberg',
        contact_avatar: 'https://i.pravatar.cc/150?img=5',
        contact_unseen_messages: 3,
        contact_favorite: true,
        last_message_content: 'El código de autenticación',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 6,
        contact_name: 'Tim Cook',
        contact_avatar: 'https://i.pravatar.cc/150?img=6',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'La reunión es a las 3 PM',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 7,
        contact_name: 'Sundar Pichai',
        contact_avatar: 'https://i.pravatar.cc/150?img=7',
        contact_unseen_messages: 5,
        contact_favorite: false,
        last_message_content: 'revisa los nuevos documentos',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 8,
        contact_name: 'Satya Nadella',
        contact_avatar: 'https://i.pravatar.cc/150?img=8',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: '¿Podemos coordinar?',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 9,
        contact_name: 'Jeff Bezos',
        contact_avatar: 'https://i.pravatar.cc/150?img=9',
        contact_unseen_messages: 1,
        contact_favorite: false,
        last_message_content: 'El envío ya está en camino',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 10,
        contact_name: 'Bill Gates',
        contact_avatar: 'https://i.pravatar.cc/150?img=10',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'Gracias por tu donación',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 11,
        contact_name: 'Steve Jobs',
        contact_avatar: 'https://i.pravatar.cc/150?img=11',
        contact_unseen_messages: 0,
        contact_favorite: true,
        last_message_content: 'Bien, solo falta el diseno',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 12,
        contact_name: 'Larry Page',
        contact_avatar: 'https://i.pravatar.cc/150?img=12',
        contact_unseen_messages: 2,
        contact_favorite: false,
        last_message_content: 'Reunión de Google',
        last_message_state: 'DELIVERED'
    },
    {
        contact_id: 13,
        contact_name: 'Sergey Brin',
        contact_avatar: 'https://i.pravatar.cc/150?img=13',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: '¿Viste el último prototipo?',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 14,
        contact_name: 'Jack Dorsey',
        contact_avatar: 'https://i.pravatar.cc/150?img=14',
        contact_unseen_messages: 1,
        contact_favorite: false,
        last_message_content: 'Hilo interesante sobre web3',
        last_message_state: 'SENT'
    },
    {
        contact_id: 15,
        contact_name: 'Brian Chesky',
        contact_avatar: 'https://i.pravatar.cc/150?img=15',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'Tu reserva está confirmada',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 16,
        contact_name: 'Reed Hastings',
        contact_avatar: 'https://i.pravatar.cc/150?img=16',
        contact_unseen_messages: 3,
        contact_favorite: false,
        last_message_content: 'Nueva temporada',
        last_message_state: 'DELIVERED'
    },
    {
        contact_id: 17,
        contact_name: 'Susan Wojcicki',
        contact_avatar: 'https://i.pravatar.cc/150?img=17',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'Estadísticas actualizadas',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 18,
        contact_name: 'Ginni Rometty',
        contact_avatar: 'https://i.pravatar.cc/150?img=18',
        contact_unseen_messages: 0,
        contact_favorite: true,
        last_message_content: 'Informe trimestral adjunto',
        last_message_state: 'SEEN'
    },
    {
        contact_id: 19,
        contact_name: 'Meg Whitman',
        contact_avatar: 'https://i.pravatar.cc/150?img=19',
        contact_unseen_messages: 4,
        contact_favorite: false,
        last_message_content: 'Llamada programada',
        last_message_state: 'SENT'
    },
    {
        contact_id: 20,
        contact_name: 'Sheryl Sandberg',
        contact_avatar: 'https://i.pravatar.cc/150?img=20',
        contact_unseen_messages: 0,
        contact_favorite: false,
        last_message_content: 'Gracias por participar',
        last_message_state: 'SEEN'
    }

]

export default contact_data