export const sampleData = [
    {
        id: '1',
        title: 'Trip to Empire State building',
        date: new Date('2018-03-21'),
        time: new Date('2018-03-18 2:30 PM'),
        duree: '45 minutes',
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'NY, USA',
        venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/30.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: new Date('2018-03-18'),
        time: new Date('2018-03-18 2:00 PM'),
        duree: '1h 30 minutes',
        category: 'drinks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/24.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Christelle',
                photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
            },
            {
                id: 'b',
                name: 'Myriam',
                photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
            },
            {
                id: 'b',
                name: 'Stephane',
                photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
            }
        ]
    }
];