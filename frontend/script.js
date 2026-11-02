
// ================= BOOK SERVICE =================

function bookService() {
    window.location.href = "booking.html";
}


// ================= SEARCH SERVICE =================

function searchService() {
    let service = document.getElementById("serviceSearch").value;

    if (service.trim() === "") {
        alert("Please enter a service.");
    } else {
        alert("Searching for: " + service);
    }
}


// ================= EXPLORE SERVICES =================

function exploreServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}


// ================= BOOKING FORM =================

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const booking = {

                id: "FM" + Date.now(),

                name: document.getElementById("customerName").value,

                mobile: document.getElementById("mobile").value,

                service: document.getElementById("service").value,

                date: document.getElementById("bookingDate").value,

                time: document.getElementById("bookingTime").value,

                address: document.getElementById("address").value

            };

            // Save booking details
            localStorage.setItem(
                "fixmateBooking",
                JSON.stringify(booking)
            );

            // Open confirmation page
            window.location.href = "booking-success.html";

        });

    }


    // ================= SHOW BOOKING DETAILS =================

    const bookingId = document.getElementById("bookingId");

    if (bookingId) {

        const savedBooking = localStorage.getItem("fixmateBooking");

        if (savedBooking) {

            const booking = JSON.parse(savedBooking);

            document.getElementById("bookingId").textContent = booking.id;
            document.getElementById("showName").textContent = booking.name;
            document.getElementById("showMobile").textContent = booking.mobile;
            document.getElementById("showService").textContent = booking.service;
            document.getElementById("showDate").textContent = booking.date;
            document.getElementById("showTime").textContent = booking.time;
            document.getElementById("showAddress").textContent = booking.address;

        } else {

            document.querySelector(".booking-details").textContent =
                "No booking details found.";

        }

    }

});
