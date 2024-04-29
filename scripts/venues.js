import { getVenues } from "./database.js";

const venues = getVenues()

export const venueList = () => {
    let html = "<h2>Venues</h2><ul class='infoList'>"

    for (const venue of venues) {
        html += `<li class="listStyle">${venue.name}</li>`
    }

    html += "</ul>"
    return html
}