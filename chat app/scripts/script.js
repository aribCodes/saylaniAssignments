// importing required attributes from /firebase/firebaseConfig.js this path
import {db, get, set, update, ref, child, remove, push, onChildAdded} from '../firebase/firebaseConfig.js'

// getting Input tag named "msg_input"
var msgInput = document.getElementById("msg_input");

// getting div named "messages_display" to display msgs from firebase
var msgDisplay = document.getElementById("messages_display");

onChildAdded(ref(db,'messages') ,(snapshot) => {
    // var msg = `<p>${snapshot.val().msg} <span>${snapshot.val().time}</span></p>`;

    if (localStorage.getItem('user') == snapshot.val().name) {
        
        var msg = document.createElement('p');
        var msgTime = document.createElement('span');
        msgTime.innerText += snapshot.val().time;

        var text = document.createTextNode(snapshot.val().msg)
        
        msg.classList.add('right_msgs');

        msg.appendChild(msgTime);
        msg.appendChild(text);
        msgDisplay.appendChild(msg);
        console.log(msg);
    }
    else{
        var msg = document.createElement('p');
        msg.innerText = snapshot.val().msg;
        msg.classList.add('left_msgs');

        var msgTime = document.createElement('span');
        msgTime.innerText = snapshot.val().time;
    
        msg.appendChild(msgTime);
        msgDisplay.appendChild(msg);
    }
    // console.log(snapshot.val());
})

var userName;
// on every load of a window the above code will be triggered
window.onload = () => {
    if (localStorage.getItem('user') == undefined) {
        alert("Please use key name 'user' and give your name as user value to proceed towards chat app.");
    }
}

// on click of send button this code will be triggered
document.getElementById("send_btn").addEventListener("click", () => {
    // setting a unique key, on every click of a send button a unique key will be generated
    var uniqueKey = push(ref(db)).key;

    userName = localStorage.getItem('user');
    // if there is no value in the msg input field and alert will be displayed
    if(msgInput.value.length === 0){
        alert("Please enter a message.");
        return
    }
    else{
        var date = new Date();

        // object which will contain message details before reaching firebase database
        var msgDetail = {
            msg: msgInput.value,
            name: userName,
            time: date.toLocaleTimeString(),
            date: date.toLocaleString(),
        }
        set(ref(db, `messages/${uniqueKey}`), msgDetail)
        .then(() => console.log("sent"))
        .catch((error) => console.log("message not sent due to ", error))
        msgInput.value = "";
    }
})