// navbar responsive
var barx = document.querySelector('#bar')
var navbar = document.querySelector('#navbar')
var closeIcon = document.querySelector('#close')
closeIcon.style.red = "red"

if (barx) {
    barx.addEventListener('click', () => {
        navbar.classList.add('active');
        closeIcon.style.display = "initial"
        console.log("working")
    })
}
if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active');
        closeIcon.style.display = "none"
        console.log("working2")
    })
}