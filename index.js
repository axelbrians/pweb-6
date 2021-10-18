function submitForm() {
    const res = validateForm();
    if (res) {
        alert("Logged in");
    } else {
        // alert("Ada field yang belum terisi");
    }
}

function validateForm() {
    
    console.log(`submitted`);

    if (document.forms["loginForm"]["userEmail"].value == "") {
        alert("Email cannot be empty");
        document.forms["loginForm"]["userEmail"].focus();
        return false;
    }

    if (document.forms["loginForm"]["userPassword"].value == "") {
        alert("Password cannot be empty");
        document.forms["loginForm"]["userPassword"].focus();
        return false;
    }

    return true;
}