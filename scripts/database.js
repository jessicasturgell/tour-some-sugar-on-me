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
        genre: "Hip Hop",
        yearFormed: 2017
    },

    {
        id: 3,
        name: "Holy Moly",
        numMembers: 5,
        genre: "Punk",
        yearFormed: 2020
    },

    {
        id: 4,
        name: "Geonovah",
        numMembers: 1,
        genre: "Hip Hop",
        yearFormed: 2010
    },

    {
        id: 5,
        name: "Crab Rangoon",
        numMembers: 4,
        genre: "Pop",
        yearFormed: 1989
    }],

    bandMembers: [{
        id: 1,
        firstName: "Sgt.",
        lastName: "Peppers",
        yearBorn: 1982,
        role: "lead singer",
        band: "The Cannolis",
        bandId: 1
    },
    
    {
        id: 2,
        firstName: "Jelly",
        lastName: "Roll",
        yearBorn: 1980,
        role: "electric guitar",
        band: "The Cannolis",
        bandId: 1
    },    
    
    {
        id: 3,
        firstName: "Boolean",
        lastName: "Please",
        yearBorn: 1985,
        role: "bass",
        band: "The Cannolis",
        bandId: 1
    },
        
    {
        id: 4,
        firstName: "Song",
        lastName: "Hottie",
        yearBorn: 1999,
        role: "singer",
        band: "Hot Stuff",
        bandId: 2
    },
        
    {
        id: 5,
        firstName: "Dance",
        lastName: "Hottie",
        yearBorn: 1999,
        role: "dancer",
        band: "Hot Stuff",
        bandId: 2
    },
        
    {
        id: 6,
        firstName: "Gosh",
        lastName: "Golly",
        yearBorn: 2000,
        role: "lead singer",
        band: "Holy Moly",
        bandId: 3
    },
        
    {
        id: 7,
        firstName: "Jeepers",
        lastName: "Creepers",
        yearBorn: 1999,
        role: "guitar",
        band: "Holy Moly",
        bandId: 3
    },
        
    {
        id: 8,
        firstName: "Gee",
        lastName: "Willikers",
        yearBorn: 2001,
        role: "guitar",
        band: "Holy Moly",
        bandId: 3
    },
        
    {
        id: 9,
        firstName: "Jinkies",
        lastName: "Mister",
        yearBorn: 2000,
        role: "bass",
        band: "Holy Moly",
        bandId: 3
    },
        
    {
        id: 10,
        firstName: "Shooby",
        lastName: "Dooby",
        yearBorn: 1999,
        role: "drums",
        band: "Holy Moly",
        bandId: 3
    },
        
    {
        id: 11,
        firstName: "Geonoah",
        lastName: "Davis",
        yearBorn: 1996,
        role: "rapper",
        band: "Geonovah",
        bandId: 4
    },
        
    {
        id: 12,
        firstName: "Cheese",
        lastName: "Wonton",
        yearBorn: 1970,
        role: "lead singer",
        band: "Crab Rangoon",
        bandId: 5
    },
        
    {
        id: 13,
        firstName: "Lo",
        lastName: "Mein",
        yearBorn: 1971,
        role: "guitar",
        band: "Crab Rangoon",
        bandId: 5
    },
        
    {
        id: 14,
        firstName: "Egg",
        lastName: "Roll",
        yearBorn: 1969,
        role: "bass",
        band: "Crab Rangoon",
        bandId: 5
    },
        
    {
        id: 15,
        firstName: "Chicken",
        lastName: "Teriyaki",
        yearBorn: 1970,
        role: "drums",
        band: "Crab Rangoon",
        bandId: 5
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

export const getBandMembers = () => {
    return database.bandMembers.map(bandMember => ({...bandMember}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}