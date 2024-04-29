const database = {
    bands: [{
        id: 1,
        name: "The Cannolis",
        numMembers: 3,
        genre: "Alt-Pop",
        yearFormed: 1999
    },

    {
        id: 2,
        name: "Hot Stuff",
        numMembers: 2,
        yearFormed: 2017
    },

    {
        id: 3,
        name: "Holy Moly",
        numMembers: 5,
        yearFormed: 2020
    },

    {
        id: 4,
        name: "Geonovah",
        numMembers: 1,
        yearFormed: 2010
    },

    {
        id: 5,
        name: "Crab Rangoon",
        numMembers: 4,
        yearFormed: 1989
    }],

    venues: [{
        id: 1,
        name: "Hot Girl Club",
        address: "123 Hot Girl Street",
        squareFootage: 2500,
        maximumOccupancy: 250
    },

    {
        id: 2,
        name: "Lincoln Logs",
        address: "15 Lincoln Ave",
        squareFootage: 1000,
        maximumOccupancy: 100
    },

    {
        id: 3,
        name: "Totally Totally",
        address: "2 Valley Ln",
        squareFootage: 5000,
        maximumOccupancy: 500
    }],

    bookings: [{
        id: 1,
        bandName: "Crab Rangoon",
        venueName: "Lincoln Logs",
        bookingDate: "May 1, 2024 @ 9PM"
    },

    {
        id: 2,
        bandName: "The Cannolis",
        venueName: "Totally Totally",
        bookingDate: "May 3, 2024 @ 10PM"
    },

    {
        id: 3,
        bandName: "Hot Stuff",
        venueName: "Totally Totally",
        bookingDate: "May 3, 2024 @ 11PM"
    },

    {
        id: 4,
        bandName: "Geonovah",
        venueName: "Hot Girl Club",
        bookingDate: "May 4, 2024 @ 7PM"
    },

    {
        id: 5,
        bandName: "Holy Moly",
        venueName: "Lincoln Logs",
        bookingDate: "May 5, 2024 @ 9PM"
    },

    {
        id: 6,
        bandName: "Crab Rangoon",
        venueName: "Hot Girl Club",
        bookingDate: "May 5, 2024 @ 9PM"
    },

    {
        id: 7,
        bandName: "Hot Stuff",
        venueName: "Lincoln Logs",
        bookingDate: "May 6, 2024 @ 7PM"
    },
    {
        id: 8,
        bandName: "The Cannolis",
        venueName: "Totally Totally",
        bookingDate: "May 6, 2024 @ 8PM"
    },

    {
        id: 9,
        bandName: "Crab Rangoon",
        venueName: "Totally Totally",
        bookingDate: "May 6, 2024 @ 8PM"
    },

    {
        id: 10,
        bandName: "Geonovah",
        venueName: "Lincoln Logs",
        bookingDate: "May 6, 2024 @ 8PM"
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