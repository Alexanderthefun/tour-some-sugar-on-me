import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

// function for making a bullet list of bands
export const bandString = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

//function for finding the venues that a band is playing.
const bandBookings = (band) => {
    let tourVenues = ""
    for (const booking of bookings) {
        if (band.id === booking.bandId) {
            for (const venue of venues) {
                if (booking.venueId === venue.id){

                    tourVenues += `${venue.name} \n`
                }
            }
        }
    }
    return tourVenues
}




//function for clickEvent that will display all venues that band is playing.
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")

            for (const band of bands) {
                if ( band.id === parseInt(bandId)) {
                    const bandTourVenues = bandBookings(band)
                    window.alert(`You can catch ${band.name} at any of these venues: ${bandTourVenues}`)
                }
            }
        }
    }
)

