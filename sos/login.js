

function addData() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', pass);
}

function checkData() {
    var enterEmail = document.getElementById('userin').value;
    var enterPwd = document.getElementById('passin').value;
    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if (enterEmail === getEmail && enterPwd === getPwd) {
        alert("Login successful");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password");
    }
}
