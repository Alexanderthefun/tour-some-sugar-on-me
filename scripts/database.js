const database = {
    bands: [{
        id: 1,
        name: "Tool",
        memberNum: 4,
        genre: "math-rock",
        yearFormed: 1990
    }, {
        id: 2,
        name: "Incubus",
        memberNum: 5,
        genre: "indie-rock",
        yearFormed: 1991
    }, {
        id: 3,
        name: "Radiohead",
        memberNum: 5,
        genre: "indie-rock",
        yearFormed: 1985
    }, {
        id: 4,
        name: "Deftones",
        memberNum: 5,
        genre: "nu-metal",
        yearFormed: 1988
    }, {
        id: 5,
        name: "Papadosio",
        memberNum: 5,
        genre: "jam band",
        yearFormed: 2006
    }],

    venues: [{
        id: 1,
        name: "The Orange Peel",
        address: "4848 citrus rd",
        squareFootage: 800,
        maxOccupancy: 500
    }, {
        id: 2,
        name: "The Tabernacle",
        address: "300 sparta dr",
        squareFootage: 900,
        maxOccupancy: 400
    }, {
        id: 3,
        name: "The East Room",
        address: "123 Gallatin pike",
        squareFootage: 600,
        maxOccupancy: 350
    }, {
        id: 4,
        name: "Red Rocks",
        address: "8769 trinidad dr",
        squareFootage: 3500,
        maxOccupancy: 10000
    }],

    bookings: [{
        id: 1,
        bandId: 1,
        venueId: 4,
        date: "12/31/2022"
    }, {
        id: 2,
        bandId: 5,
        venueId: 3,
        date: "02/27/2023"
    }, {
        id: 3,
        bandId: 2,
        venueId: 1,
        date: "02/27/2023"
    }, {
        id: 4, 
        bandId: 1,
        venueId: 2,
        date: "11/11/2023"
    }, {
        id: 5, 
        bandId: 4,
        venueId: 2,
        date: "11/11/2023"
    }, {
        id: 6, 
        bandId: 3,
        venueId: 4,
        date: "11/12/2023"
    }]    
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

