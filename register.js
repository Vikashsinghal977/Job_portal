const firebaseConfig = {
  apiKey: "AIzaSyCVXyMb52dBahg4LRQy4pJpYZQv7Qh973I",
  authDomain: "jobportal-79899.firebaseapp.com",
  databaseURL: "https://jobportal-79899-default-rtdb.firebaseio.com",
  projectId: "jobportal-79899",
  storageBucket: "jobportal-79899.appspot.com",
  messagingSenderId: "598154797196",
  appId: "1:598154797196:web:2aba81a58ebd135ba55ba9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


document.getElementById("registerForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var pass = getInputVal("pass");
  var c_pass = getInputVal("c_pass");

  saveMassage(name, pass, c_pass)
}

function getInputVal(id) {
  return document.getElementById(id).value;
}


function saveMassage(name, pass, c_pass){
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    name:name,
    pass:pass,
    c_pass:c_pass
  })
}