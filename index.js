function checkPasswordStrength(password) {
    //Check if password is null
    if(!password) {
        console.log('INVALID PASSWORD')
        return 
    }

    // RULE 1: 8 Characters
    if(password.length >= 8) {
        console.log('RULE 1 PASSED ✅')
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
    } else {
        console.log('Missing Lowercase Character ❌')
    }

    if(hasUppercaseChar) {
        console.log('Uppercase Character ✅')
    } else {
        console.log('Missing Uppercase Character ❌')
    }

    if(hasNumber) {
        console.log('Number ✅')
    } else {
        console.log('Missing Number ❌')
    }

    if(hasSpecialChar) {
        console.log('Symbol ✅')
    } else {
        console.log('Missing Symbol ❌')
    }


}

// Collect User Password
const password = prompt("Enter your password")
console.log(password)
checkPasswordStrength(password)
