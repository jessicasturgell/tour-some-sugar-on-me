import { getBookings } from "./database.js";

const bookings = getBookings()

export const bookingList = () => {
    let html = "<h1>Upcoming Shows</h2><ul class='bookingList'>"

    for (const booking of bookings) {
        html += `<li class='bookingList'><i>${booking.bandName}</i> will perform at <i>${booking.venueName}</i> on ${booking.bookingDate}</li>`
    }

    html += "</ul>"
    return html
}