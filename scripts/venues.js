import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


// function for making a bullet list of venues
export const venueString = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

export const findVenue = (booking) => {
    let bookedVenue = ""
    for (const venue of venues) {
        if (booking.venueId === venue.id) {
            bookedVenue = venue
        }
    }
    return bookedVenue
}

//function for finding the bands playing at current venue.
const venueBookings = (venue) => {
    let bookedArtists = ""
    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            for (const band of bands) {
                if (booking.bandId === band.id) {

                    bookedArtists += `${band.name} \n`
                }
            }
        }
    }
    return bookedArtists
}

//function for clickEvent that will display all bands playing at selected venue
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")

            for (const venue of venues) {
                if ( venue.id === parseInt(venueId)) {
                    const venueArtists = venueBookings(venue)
                    window.alert(`${venueArtists}`)
                }
            }
        }
    }
)