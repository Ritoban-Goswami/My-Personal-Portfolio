let myForm = document.getElementById('form-id');
let userName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let sendButton = document.getElementById('sendButton');


myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let spinnerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span class="visually-hidden">Loading...</span>`

    sendButton.innerHTML = spinnerHTML

    fetch("https://formsubmit.co/ajax/ritobangoswami15@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName.value,
            email: email.value,
            message: subject.value
        })
    })
        .then(response => response.json())
        .then(data => {
            myForm.reset()
            console.log(data)
            sendButton.innerHTML = 'Send'
            alert(data.message)
        })
        .catch(error => {
            alert(error)
            console.error(error)
        })
});






// action="https://formsubmit.co/ritobangoswami15@gmail.com" method="POST"