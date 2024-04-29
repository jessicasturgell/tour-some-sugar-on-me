import { getBands } from "./database.js";

const bands = getBands()

export const bandList = () => {
    let html = "<h2>Bands</h2><ul class='infoList'>"

    for (const band of bands) {
        html += `<li class="listStyle">${band.name}</li>`
    }

    html += "</ul>"
    return html
}