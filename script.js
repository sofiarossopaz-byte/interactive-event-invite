
// Select HTML elements
const rsvpForm = document.getElementById("rsvp-form");
const emailInput = document.getElementById("email");
const attendanceInput = document.getElementById("attendance");
const confirmationMessage = document.getElementById("confirmation-message");

// GIF background URLs
const attendingGIF =
    "https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif";

const notAttendingGIF =
    "https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif";

// Handle form submission
rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const email = emailInput.value.trim();
    const attendance = attendanceInput.value;

    // Validate required fields
    if (!email || !attendance) {
        confirmationMessage.textContent =
            "Please complete all required fields.";
        confirmationMessage.style.color = "#ff4444";
        return;
    }

    // Display background and confirmation
    if (attendance === "yes") {

        document.body.style.backgroundImage =
            `url("${attendingGIF}")`;

        confirmationMessage.textContent =
            "🎉 You're on the guest list! Get ready for an epic GIF Gala!";

        confirmationMessage.style.color = "#00ff99";

    } else {

        document.body.style.backgroundImage =
            `url(https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif)`;

        confirmationMessage.textContent =
            "😢 We'll miss you at the GIF Gala! Thanks for letting us know!";

        confirmationMessage.style.color = "#00ffff";
    }

    // Reset form
    rsvpForm.reset();

});

