function checkPasswordStrength(password) {
    //Check if password is null
    if(!password) {
        console.log('INVALID PASSWORD')
        return 
    }

    let score = 0

    // RULE 1: 8 Characters
    if(password.length >= 8) {
        console.log('RULE 1 PASSED ✅')
        score++
    } else {
        console.log('RULE 1 FAILED ❌')
    }

    // RULE 2: Lowercase

    // RULE 3: Uppercase

    // RULE 4: Number

    // RULE 5: Symbol (!, $)

    let hasLowercaseChar = false
    let hasUppercaseChar = false
    let hasNumber = false
    let hasSpecialChar = false

    // Iterate through each character of the password string
    for(let i=0; i < password.length; i++) {
        let char = password[i]
        if(char >= 'a' && char <= 'z') {
            hasLowercaseChar = true
        }
        if(char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true
        }
        if(char >= '0' && char <= '9') {
            hasNumber = true
        }
        if(char == '!' || char == '$') {
            hasSpecialChar = true
        }
    }

    if(hasLowercaseChar) {
        console.log('Lowercase Character ✅')
        score++
    } else {
        console.log('Missing Lowercase Character ❌')
    }

    if(hasUppercaseChar) {
        console.log('Uppercase Character ✅')
        score++
    } else {
        console.log('Missing Uppercase Character ❌')
    }

    if(hasNumber) {
        console.log('Number ✅')
        score++
    } else {
        console.log('Missing Number ❌')
    }

    if(hasSpecialChar) {
        console.log('Symbol ✅')
        score++
    } else {
        console.log('Missing Symbol (!, $) ❌')
    }

    if(score == 5) {
        console.log('YOU HAVE A STRONG PASSWORD 🟢')
    } else if (score == 4 ) {
        console.log('YOU HAVE A MODERATE PASSWORD 🟠')
    } else {
        console.log('YOU HAVE A WEAK PASSWORD 🔴')
    }
}

// Collect User Password
const password = prompt("Enter your password")
console.log(password)
checkPasswordStrength(password)
