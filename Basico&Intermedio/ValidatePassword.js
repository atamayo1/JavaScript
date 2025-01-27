let password = "12345";
let input = "1234";

function validatePassword(data) {
    if (data == password) {
        console.log("The password is correct");
    } else {
        console.log("The password is incorrect");
    }
}

validatePassword(input);
