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
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

//register button functionality
function register() {
    console.log('1')
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if(validate_email(email)==false || validate_password(password)==false){
        alert('Email or Password is invalid')
        return
    }

    console.log('2')
    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {

            var user = auth.currentUser

            var db_ref = database.ref()

            var user_data = {
                email : email,
                password : password
            }

            db_ref.child('users/' + user.uid).set(user_data)
        })
        .catch(function(error) {
            console.log('error')
            alert(error.code)
            alert(error.message)
        })
}

function login() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if(validate_email(email)==false || validate_password(password)==false){
        alert('Email or Password is invalid')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser

            var db_ref = database.ref()

            var user_data = {
                previous_login_time : Date.now()
            }

            db_ref.child('users/' + user.uid).update(user_data)

            alert('User Logged In')
        })
        .catch(function(error) {
            var error_code = error.error_code
            var error_message = error.message

            alert(error_message)
        })
}
function validate_email(email) {
    valid_expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (valid_expression.test(email) == true) {
        return true
    }
    return false
};

function validate_password(password) {
    if (password <= 10) {
        return false
    }
    return true
};