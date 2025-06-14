function validateForm() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("termsError").innerText = "";


    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    let valid = true;
    let firstInvalidField = null;

   
    if (username.length < 3 || username.length > 15) {
        document.getElementById("usernameError").innerText = "Username must be between 3 and 15 characters.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("username");
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("email");
    }

    if (!validatePhoneNumber(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("phone");
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("password");
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("confirmPassword");
    }

    if (!terms) {
        document.getElementById("termsError").innerText = "You must agree to the terms and services.";
        valid = false;
        if (!firstInvalidField) firstInvalidField = document.getElementById("terms");
    }

    if (firstInvalidField) {
        firstInvalidField.focus();
    }

    if (valid) {
        alert("Form submitted successfully!");
        window.location.href = "Home.html";
    }

    document.querySelector("button").disabled = false;
}

function validateEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function validatePhoneNumber(phone) {
    let strippedPhone = '';
    
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] >= '0' && phone[i] <= '9') {
            strippedPhone += phone[i];
        }
    }
  
    return strippedPhone.length === 10;
}


document.querySelector("button").addEventListener("click", function() {
    this.disabled = true;
    validateForm();
});
