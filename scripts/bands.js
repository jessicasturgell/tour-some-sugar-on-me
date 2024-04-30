import { getBands, getBookings } from "./database.js";

const bands = getBands()
const bookings = getBookings()

export const bandList = () => {
    let html = "<h2>Bands</h2><ul class='infoList'>"

    for (const band of bands) {
        html += `<li class="listStyle" data-id="${band.id}" data-type="band">${band.name}</li>`
    }

    html += "</ul>"
    return html
}

const findBooking = (bandId) => {
    const bookingsForBand = bookings.filter(booking => booking.bandName === bands.find(band => band.id === bandId).name)
    const venuesPlaying = bookingsForBand.map(booking => booking.venueName)
    return venuesPlaying;
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "band") {
            const bandId = parseInt(itemClicked.dataset.id)
            for (const band of bands) {
                if (band.id === bandId) {
                    const venuesPlaying = findBooking(bandId)
                    if (venuesPlaying.length > 0) {
                        window.alert(`Appearance schedule for ${band.name}:\n${venuesPlaying.join("\n")}`)
                    } else {
                        window.alert(`${band.name} is not playing at any venues.`)
                    }
                }
            }
        }
    }
)