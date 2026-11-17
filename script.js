
// Select HTML elements
const rsvpForm = document.getElementById("rsvp-form");
const emailInput = document.getElementById("email");
const attendanceInput = document.getElementById("attendance");
const confirmationMessage = document.getElementById("confirmation-message");

// Handle form submission
rsvpForm.addEventListener("submit", function(event) {

    // Prevent page reload
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

    // Check attendance response
    if (attendance === "yes") {

        // Add GIF background to the body
        document.body.classList.add("attending");

        confirmationMessage.textContent =
            "🎉 You're on the guest list! Get ready for an epic GIF Gala!";

        confirmationMessage.style.color = "#00ff99";

    } else {

        // Remove GIF background
        document.body.classList.remove("attending");

        confirmationMessage.textContent =
            "Thanks for letting us know! We'll miss you at the GIF Gala!";

        confirmationMessage.style.color = "#00ffff";
    }

    // Reset form
    rsvpForm.reset();

});
