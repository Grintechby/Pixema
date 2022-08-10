import React from "react";
import { IMoviePage } from "../types/IMoviePage";
import { ISelectedMoviePage } from "../types/ISelectedMoviePage";

export const data = [
    {
        id: 1,
        img: '/images/poster.png',
        title: 'Wonder Woman: 1984',
        genres: ['Adventure', 'Action', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 2,
        img: '/images/Posters/StarWars.png',
        title: 'Star Wars: The Rise of Skywalker',
        genres: ['Adventure', 'Fiction', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '8.2',
        duration: '130 min'
    },
    {
        id: 3,
        img: '/images/Posters/AquaMan.png',
        title: 'Aquaman 2 ',
        genres: ['Adventure', 'Action', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 4,
        img: '/images/Posters/Joker.png',
        title: 'The Joker',
        genres: ['Thriller', 'Crime', 'Drama'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '8.0',
        duration: '130 min'
    },
    {
        id: 5,
        img: '/images/Posters/BumbleBee.png',
        title: 'Bumblebee',
        genres: ['Adventure', 'Action', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 6,
        img: '/images/Posters/Aladdin.png',
        title: 'Aladdin',
        genres: ['Adventure', 'Fiction', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 7,
        img: '/images/Posters/JurassicWorld.png',
        title: 'Jurassic World ',
        genres: ['Adventure', 'Action', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 8,
        img: '/images/Posters/TheWitches.png',
        title: 'The Witches',
        genres: ['Comedy', 'Family', 'Mystery'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '5.8',
        duration: '130 min'
    },
    {
        id: 9,
        img: '/images/Posters/Dolittle.png',
        title: 'Dolittle',
        genres: ['Adventure', 'Comedy', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '7.6',
        duration: '130 min'
    },
    {
        id: 10,
        img: '/images/Posters/Avengers.png',
        title: 'Avengers: Endgame ',
        genres: ['Adventure', 'Action', 'Fantasy'],
        description: 'In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum.',
        year: '2011',
        released: '15 Jul 2011',
        boxOffice: '$381,409,310',
        country: ['United Kingdom', 'United States'],
        production: ['Heyday Films', 'Moving Picture Company', 'Warner Bros'],
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        director: 'David Yates',
        writers: ['J.K. Rowling', 'Steve Kloves'],
        iMDb: '7.6',
        pixemaRating: '4.2',
        duration: '130 min'
    },
]