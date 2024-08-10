
// Toggle navigation on hamburger click
document.getElementById("hamburger").onclick = function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
};

document.getElementById("waitlist-form").onsubmit = function(event) {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycby5ez8Bl1jWWxhPECficuhz8WRkR-LCybkvQu9qzlmYRdn9kCQU7Et4_lAT9k6X9r8Y/exec'; // Replace with actual URL
    const email = document.getElementById("email").value;
    const formData = new FormData();
    formData.append('email', email);
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Handle CORS
        body: formData
    })
    .then(response => {
        document.getElementById("waitlist-response").innerText = "Thank you for signing up!";
        document.getElementById("waitlist-form").reset();
    })
    .catch(error => {
        document.getElementById("waitlist-response").innerText = "There was an error. Please try again.";
    });
};