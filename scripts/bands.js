import { getBands, getBookings, getBandMembers } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const bandMembers = getBandMembers()

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
    const venuesSet = new Set();
    const bandMembersForBand = bandMembers.filter(member => member.bandId === bandId);

   bookingsForBand.forEach(booking => {
    venuesSet.add(booking.venueName);
})

const venuesPlaying = [...venuesSet]
    return {venuesPlaying: venuesPlaying,
            bandMembers: bandMembersForBand
    }
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "band") {
            const bandId = parseInt(itemClicked.dataset.id)
            for (const band of bands) {
                if (band.id === bandId) {
                    const bookingInfo = findBooking(bandId)
                    const venuesPlaying = bookingInfo.venuesPlaying
                    const bandMembers = bookingInfo.bandMembers
                    if (venuesPlaying.length > 0) {
                        let message = `${band.name} Member Information:\n`
                        bandMembers.forEach(member => {
                            message += `\nName: ${member.firstName} ${member.lastName}\nBirth Year: ${member.yearBorn}\nRole: ${member.role}\n`
                        })

                        message += `\n${band.name} Slotted Venues:\n${venuesPlaying.join("\n")}`
                        window.alert(message)
                    } else {
                        window.alert(`${band.name} is not playing at any venues.`)
                    }
                }
            }
        }
    }
) 