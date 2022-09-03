let myForm = document.getElementById('form-id');
let userName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let sendButton = document.getElementById('sendBtn');
let alertPopUp = document.getElementById('alertPopUp');
let testBtn = document.getElementById('testBtn');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let spinnerHTML = `<div class="d-flex justify-content-center"><div class="spinner-border m-1" role="status" aria-hidden="true"><span class="visually-hidden">Loading...</span></div></div>`

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
            alertPopUp.innerHTML = ` ${data.message} <i class="ms-1 fa-sharp fa-solid fa-circle-check"></i>`
            alertPopUp.classList.toggle("hidden")
            setTimeout(() => {
                alertPopUp.classList.toggle("hidden")
            }, 4000)
        })
        .catch(error => {
            alert(error)
            console.error(error)
        })
});






// action="https://formsubmit.co/ritobangoswami15@gmail.com" method="POST"