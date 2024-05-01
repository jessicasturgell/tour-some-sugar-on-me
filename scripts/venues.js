import { getVenues, getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()

export const venueList = () => {
    let html = "<h2>Venues</h2><ul class='infoList'>"

    for (const venue of venues) {
        html += `<li class="listStyle" data-id="${venue.id}" data-name="${venue.name}" data-type="venue">${venue.name}</li>`
    }

    html += "</ul>"
    return html
}

const findBooking = (venueId) => {
    const venueName = venues.find(venue => venue.id === venueId).name
    const uniqueBookings = [...new Set(bookings.filter(booking => booking.venueName === venueName).map(booking => booking.bandName))]
    return uniqueBookings
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            const venueId = parseInt(itemClicked.dataset.id)
                for (const venue of venues) {
                    if (venue.id === venueId) {
                        const bandsPlaying = findBooking(venueId)
                        if (bandsPlaying.length > 0) {
                            window.alert(`Bands playing at ${venue.name}:\n${bandsPlaying.join("\n")}`)
                        } else {
                            window.alert(`No bands playing at ${venue.name} currently.`)
                    }
                }
            }
        }
    }
)