import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js"

var firebaseConfig = {
    apiKey: "hidden",
    authDomain: "hidden",
    projectId: "hidden",
    storageBucket: "hidden",
    messagingSenderId: "hidden",
    appId: "hidden",
};
console.log('initialize')
// Initalize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase)
const database = getDatabase(firebase)

//register button functionality
function register() {
    console.log('reg-1')
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var user_name = document.getElementById('username').value

    if(validate_email(email)==false || validate_password(password)==false){
        alert('Email or Password is invalid')
        return
    }

    console.log('reg-2')
    createUserWithEmailAndPassword(auth, email, password, user_name)
        .then(function() {
            var user = auth.currentUser

            var user_data = {
                email : email,
                password : password,
                user_name : user_name
            }

            set(ref(database, 'users/' + user.uid), {
                user_data
            })
            window.location.href = './main.html';

        })
        .catch(function(error) {
            console.log('error')
            console.log(error.code)
            console.log(error.message)
            alert(error.code)
            alert(error.message)
        })
}

function login() {

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if(validate_email(email)==false || validate_password(password)==false){
        alert('Email or Password is invalid')
        return
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = './main.html';
            console.log(userCredential.user.email);
        })
        .catch((error) => {
            alert("Invalid Email or Password.")
        })
}
function validate_email(email) {
    var valid_expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (valid_expression.test(email) == true) {
        return true
    }
    return false
};

function validate_password(password) {
    if (password < 6) {
        return false
    }
    return true
};

if (document.getElementById("login_button")) {
    document.getElementById("login_button").addEventListener('click', function() {
        login();
    })
}

if(document.getElementById("register_button")) {
    document.getElementById("register_button").addEventListener('click', function() {
        register();
    });
}
