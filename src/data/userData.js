

export const users = [
  {
    id: 1,
    username: "berke",
    password: "123",
    image:
      "https://images2.alphacoders.com/133/thumbbig-1331312.webp",
    isOnline: false,
    chatMessages: [
      {
        from: "tom",
        id: 1,
        image:
          "https://images7.alphacoders.com/303/thumbbig-303042.webp",
        updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "Where can I buy an inexpensive cashmere sweater?",
          },
          {
            id: 2,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "Maybe you should look around for an outlet.",
          },
          {
            id: 3,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "That is a wonderful idea.",
          },
          {
            id: 4,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "Outlets have more reasonable prices.",
          },
          {
            id: 5,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "Thank you for your help.",
          },
          {
            id: 6,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "No problem. Good luck.",
          },
        ],
      },
      {
        from: "bombadil",
        id: 2,
        image:
          "https://images8.alphacoders.com/133/thumbbig-1331368.webp",
          updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "What seems to be the problem?",
          },
          {
            id: 2,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: "Oh, my God! It`s my stomach. It`s killing me!",
          },
          {
            id: 3,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "Where does it hurt the most?",
          },
          {
            id: 4,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: " Right here! It hurts right here!",
          },
          {
            id: 5,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "How long has it felt like this?",
          },
          {
            id: 6,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message:
              "I felt OK when I woke up, and then, suddenly, I had this really sharp pain.",
          },
          {
            id: 7,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "Do you have a history of stomach pain?",
          },
          {
            id: 8,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: "No, and I haven`t done anything out of the ordinary.",
          },
        ],
      },
      {
        from: "somebody",
        id: 3,
        image: "https://images5.alphacoders.com/613/thumbbig-613927.webp",
        updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "sent",
            sentFrom: "berke",
            sentTo: "somebody",
            isRead: true,
            message: "I am interested in buying auto insurance.",
          },
          {
            id: 2,
            type: "received",
            sentFrom: "somebody",
            sentTo: "berke",
            isRead: true,
            message: "idc.",
          },
        ],
      },
      {
        from: "john",
        id: 4,
        image: "https://images3.alphacoders.com/133/thumbbig-1331008.webp",
        updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "received",
            sentFrom: "john",
            sentTo: "berke",
            isRead: true,
            message:
              "Could you tell me if you have ever taken a class from Dr. Miller?",
          },
          {
            id: 2,
            type: "sent",
            sentFrom: "berke",
            sentTo: "john",
            isRead: true,
            message: "Yes. Are you going to be taking a class from him?",
          },
          {
            id: 3,
            type: "received",
            sentFrom: "john",
            sentTo: "berke",
            isRead: true,
            message: "Yes, but I have never taken his class before.",
          },
          {
            id: 4,
            type: "sent",
            sentFrom: "berke",
            sentTo: "john",
            isRead: true,
            message:
              "He is very interesting and challenging. Is that what you are looking for?",
          },
          {
            id: 5,
            type: "received",
            sentFrom: "john",
            sentTo: "berke",
            isRead: true,
            message: "Yes, that`s what I need.",
          },
          {
            id: 6,
            type: "sent",
            sentFrom: "berke",
            sentTo: "john",
            isRead: true,
            message:
              "He is really clear on what you need to learn to get a good grade. Are you willing to study hard?",
          },
          {
            id: 7,
            type: "received",
            sentFrom: "john",
            sentTo: "berke",
            isRead: true,
            message: "Yes, I guess so.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    username: "tom",
    password: "321",
    isOnline: false,
    image:
      "https://images7.alphacoders.com/303/thumbbig-303042.webp",
    chatMessages: [
      {
        from: "berke",
        id: 1,
        image:
          "https://images2.alphacoders.com/133/thumbbig-1331312.webp",
          updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "Where can I buy an inexpensive cashmere sweater?",
          },
          {
            id: 2,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "Maybe you should look around for an outlet.",
          },
          {
            id: 3,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "That is a wonderful idea.",
          },
          {
            id: 4,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "Outlets have more reasonable prices.",
          },
          {
            id: 5,
            type: "received",
            sentFrom: "tom",
            sentTo: "berke",
            isRead: true,
            message: "Thank you for your help.",
          },
          {
            id: 6,
            type: "sent",
            sentFrom: "berke",
            sentTo: "tom",
            isRead: true,
            message: "No problem. Good luck.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    username: "bombadil",
    password: "112233",
    isOnline: false,
    image:
      "https://images8.alphacoders.com/133/thumbbig-1331368.webp",
    chatMessages: [
      {
        from: "berke",
        id: 2,
        image:
          "https://images2.alphacoders.com/133/thumbbig-1331312.webp",
          updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "What seems to be the problem?",
          },
          {
            id: 2,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: "Oh, my God! It`s my stomach. It`s killing me!",
          },
          {
            id: 3,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "Where does it hurt the most?",
          },
          {
            id: 4,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: " Right here! It hurts right here!",
          },
          {
            id: 5,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "How long has it felt like this?",
          },
          {
            id: 6,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message:
              "I felt OK when I woke up, and then, suddenly, I had this really sharp pain.",
          },
          {
            id: 7,
            type: "sent",
            sentFrom: "berke",
            sentTo: "bombadil",
            isRead: true,
            message: "Do you have a history of stomach pain?",
          },
          {
            id: 8,
            type: "received",
            sentFrom: "bombadil",
            sentTo: "berke",
            isRead: true,
            message: "No, and I haven`t done anything out of the ordinary.",
          },
        ],
      },
      {
        from: 'john',
        id: 5,
        image: "https://images3.alphacoders.com/133/thumbbig-1331008.webp",
        updatedAt: Date.now(), 
        messages: [
          {
            id: 1,
            type: 'sent',
            sentFrom: 'bombadil',
            sentTo: 'john',
            isRead: true,
            message:'Hello :)',
          }
        ]
      },
    ],
  },
  {
    id: 4,
    username: "somebody",
    password: "asd",
    isOnline: false,
    image:
      "https://images5.alphacoders.com/613/thumbbig-613927.webp",
    chatMessages: [
        {
            from: "berke",
            id: 3,
            image: "https://images2.alphacoders.com/133/thumbbig-1331312.webp",
            updatedAt: Date.now(), 
            messages: [
              {
                id: 1,
                type: "sent",
                sentFrom: "berke",
                sentTo: "somebody",
                isRead: true,
                message: "I am interested in buying auto insurance.",
              },
              {
                id: 2,
                type: "received",
                sentFrom: "somebody",
                sentTo: "berke",
                isRead: true,
                message: "idc.",
              },
            ],
          },
    ],
  },
  {
    id: 5,
    username: "john",
    password: "12345",
    isOnline: false,
    image:
      "https://images3.alphacoders.com/133/thumbbig-1331008.webpa",
    chatMessages: [
        {
            from: "berke",
            id: 4,
            image: "https://images2.alphacoders.com/133/thumbbig-1331312.webp",
            updatedAt: Date.now(), 
            messages: [
              {
                id: 1,
                type: "received",
                sentFrom: "john",
                sentTo: "berke",
                isRead: true,
                message:
                  "Could you tell me if you have ever taken a class from Dr. Miller?",
              },
              {
                id: 2,
                type: "sent",
                sentFrom: "berke",
                sentTo: "john",
                isRead: true,
                message: "Yes. Are you going to be taking a class from him?",
              },
              {
                id: 3,
                type: "received",
                sentFrom: "john",
                sentTo: "berke",
                isRead: true,
                message: "Yes, but I have never taken his class before.",
              },
              {
                id: 4,
                type: "sent",
                sentFrom: "berke",
                sentTo: "john",
                isRead: true,
                message:
                  "He is very interesting and challenging. Is that what you are looking for?",
              },
              {
                id: 5,
                type: "received",
                sentFrom: "john",
                sentTo: "berke",
                isRead: true,
                message: "Yes, that`s what I need.",
              },
              {
                id: 6,
                type: "sent",
                sentFrom: "berke",
                sentTo: "john",
                isRead: true,
                message:
                  "He is really clear on what you need to learn to get a good grade. Are you willing to study hard?",
              },
              {
                id: 7,
                type: "received",
                sentFrom: "john",
                sentTo: "berke",
                isRead: true,
                message: "Yes, I guess so.",
              },
            ],
          },
          {
            from: 'bombadil',
            id: 5,
            image: "https://images8.alphacoders.com/133/thumbbig-1331368.webp",
            updatedAt: Date.now(), 
            messages: [
              {
                id: 1,
                type: 'sent',
                sentFrom: 'bombadil',
                sentTo: 'john',
                isRead: true,
                message:'Hello :)',
              }
            ]
          },
    ],
  },
  {
    id: 6,
    username: "king",
    password: "111",
    isOnline: false,
    image:
      "https://images8.alphacoders.com/133/thumbbig-1331860.webp",
    chatMessages: []
  },
  {
    id: 7,
    username: "test",
    password: "test",
    isOnline: false,
    image:
      "https://images8.alphacoders.com/632/thumbbig-632051.webp",
    chatMessages: []
  },
];

export default users;
