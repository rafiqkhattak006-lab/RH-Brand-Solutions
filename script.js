```javascript
// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        // WhatsApp number
        const phone = "923326167731";


        // Create WhatsApp message
        const whatsappMessage =
            `Hello RH Brand Solutions!

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;


        // Open WhatsApp
        const whatsappURL =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });
```
