const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("hidden");
const message = document.getElementById("message")

showBtn.addEventListener('click', () => {
    message.textContent = 'You click Show button'
})

hiddenBtn.addEventListener('click', () =>{
    message.textContent = 'You click Hidden button'
})