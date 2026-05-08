function checkPasswordStrength(password) {

    // Check if password is null
    if (!password) {
        console.log('INVALID PASSWORD');
        return;
    }

    let score = 0;

    // RULE 1: At least 8 characters
    if (password.length >= 8) {
        document.getElementById('rule-1-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-1-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    let hasLowercaseChar = false;
    let hasUppercaseChar = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    // Loop through password characters
    for (let i = 0; i < password.length; i++) {

        let char = password[i];

        // Lowercase
        if (char >= 'a' && char <= 'z') {
            hasLowercaseChar = true;
        }

        // Uppercase
        if (char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true;
        }

        // Number
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        // Special character
        if (char == '!' || char == '$') {
            hasSpecialChar = true;
        }
    }

    // RULE 2: Lowercase
    if (hasLowercaseChar) {
        document.getElementById('rule-2-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-2-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    // RULE 3: Uppercase
    if (hasUppercaseChar) {
        document.getElementById('rule-3-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-3-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    // RULE 4: Number
    if (hasNumber) {
        document.getElementById('rule-4-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-4-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    // RULE 5: Symbol (!, $)
    if (hasSpecialChar) {
        document.getElementById('rule-5-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-5-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    // RULE 6: Should not contain TEST or PASSWORD
    let lowerPassword = password.toLowerCase();

    if (
        !lowerPassword.includes('test') &&
        !lowerPassword.includes('password')
    ) {
        document.getElementById('rule-6-result').innerHTML =
            '<img src="assets/password-strength-checker-correct.png" width="30px">';
        score++;
    } else {
        document.getElementById('rule-6-result').innerHTML =
            '<img src="assets/password-strength-checker-wrong.png" width="30px">';
    }

    // PROGRESS BAR
    const percentage = Math.round((score / 6) * 100);
    const bar = document.getElementById('strength-bar');

    bar.style.width = percentage + "%";
    bar.style.backgroundColor = "#520380";

    if (percentage === 0) {

        bar.innerText = "Waiting (0%)";
        bar.className = "progress-bar";

    } else if (percentage < 50) {

        bar.innerText = `Weak (${percentage}%)`;
        bar.className = "progress-bar";

    } else if (percentage < 100) {

        bar.innerText = `Moderate (${percentage}%)`;
        bar.className = "progress-bar";

    } else {

        bar.innerText = `Strong (${percentage}%)`;
        bar.className = "progress-bar";
    }

    // SCORE RESULT
    if (score == 6) {

        document.getElementById('score-result').innerHTML =
            '<span class="badge" style="background-color: #520380;">STRONG</span>';

    } else if (score > 3 && score < 6) {

        document.getElementById('score-result').innerHTML =
            '<span class="badge" style="background-color: #520380;">MODERATE</span>';

    } else {

        document.getElementById('score-result').innerHTML =
            '<span class="badge" style="background-color: #520380;">WEAK</span>';
    }
}

// Collect User Password
const password = prompt("Enter your password");

console.log(password);

checkPasswordStrength(password);