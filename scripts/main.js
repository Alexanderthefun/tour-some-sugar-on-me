import { bandString } from "./bands.js"
import { bookingString } from "./bookings.js"
import { venueString } from "./venues.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="topHead">Tour some sugar on me</h1>
<article class="topPage">
    <section id="booking">
        <h2>Bookings</h2>
        ${bookingString()}
    </section>
</article>

<article class="bottomPage">
    <section id="band">
        <h2>Bands</h2>
        ${bandString()}
    </section>
    <section id="venue">
        <h2>Venues</h2>
        ${venueString()}
    </section>
</article>


`

mainContainer.innerHTML = applicationHTML