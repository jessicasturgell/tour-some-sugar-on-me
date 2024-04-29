import { bandList } from "./bands.js";
import { venueList } from "./venues.js";
import { bookingList } from "./bookings.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article>
${bookingList()}
</article>
<article class="infoContainer">
    <div class="infoBox">${bandList()}</div>
    <div class="infoBox">${venueList()}</div>
</article>
`

mainContainer.innerHTML = applicationHTML