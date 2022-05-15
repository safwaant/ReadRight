import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js"

var firebaseConfig = {
apiKey: "AIzaSyD3KIrId0t7ukM2XJ9eJTc03_luSTBOplk",
authDomain: "readright-8b84e.firebaseapp.com",
projectId: "readright-8b84e",
storageBucket: "readright-8b84e.appspot.com",
messagingSenderId: "397329676019",
appId: "1:397329676019:web:ea6b039c67b92aea8e2986",

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

    if(validate_email(email)==false || validate_password(password)==false){
        alert('Email or Password is invalid')
        return
    }

    console.log('reg-2')
    createUserWithEmailAndPassword(auth, email, password)
        .then(function() {
            var user = auth.currentUser

            var user_data = {
                email : email,
                password : password
            }

            set(ref(database, 'users/' + user.uid), {
                user_data
            })
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
        .then(function() {
            var user = auth.currentUser

            /*set(ref(database, 'users/' + user.uid) {
                user
            })
            var db_ref = database.ref

            var user_data = {
                previous_login_time : Date.now()
            }

            db_ref.child('users/' + user.uid).update(user_data)

            alert('User Logged In')*/
        })
        .catch(function(error) {
            var error_code = error.error_code
            var error_message = error.message

            alert(error_message)
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


document.getElementById("login_button").addEventListener('click', function() {
    login();
});


document.getElementById("register_button").addEventListener('click', function() {
    register();
});