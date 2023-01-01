import { getBands, getBookings, getVenues } from "./database.js";
import { findVenue } from "./venues.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()



// Function whose responsibility is to find the band of a booking.
const findBand = (booking) => {
    let bookedBand = ""

    for (const band of bands) {
        if (band.id === booking.bandId) {
            bookedBand = band
        }
    }

    return bookedBand
}


// function whose role is to display all bookings as html like this: "thisBand is playing at thisVenue on thisDate"
export const bookingString = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const foundBand = findBand(booking)
        const foundVenue = findVenue(booking)
            html += `<li id="booking--${booking.id}">${foundBand.name} is playing at ${foundVenue.name} on ${booking.date}</li>`
        }      
    
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")

            for (const booking of bookings) {
                const foundBand = findBand(booking, bands);
                if ( booking.id === parseInt(bookingId)) {
                    
                    window.alert(`${foundBand.name} \n ${foundBand.genre} \n formed in ${foundBand.yearFormed} \n ${foundBand.memberNum} band members`)
                }
            }
        }
    }
)
