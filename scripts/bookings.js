import { getBookings, getBands } from "./database.js";

const bookings = getBookings()

export const bookingList = () => {
    let html = "<h1>Upcoming Shows</h2><ul class='bookingList'>"

    for (const booking of bookings) {
        html += `<li class='bookingList' data-type='booking' data-id='${booking.id}' data-band='${booking.bandName}'><i>${booking.bandName}</i> will perform at <i>${booking.venueName}</i> on ${booking.bookingDate}</li>`
    }

    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
            const itemClicked = clickEvent.target
            const bands = getBands()
            for (const band of bands) {
                
                if (band.name === itemClicked.dataset.band) {
                    window.alert(`${Object.entries(band).map(e => e.join(': ')).join('\n')}`)
            }
        }
    }
)