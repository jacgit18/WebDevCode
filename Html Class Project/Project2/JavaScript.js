function validateForm() {
    var username = document.getElementsById(username).value;
    var password = document.getElementsById(password).value;

    if (username == "" || password == "") {
        alert('fill in all fields')
        return false;
    }

    else {
        return true;
    }
}