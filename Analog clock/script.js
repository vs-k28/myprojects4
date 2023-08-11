const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', ' Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov', 'Dec']

toggleEl.addEventListener('click', (e) => {
    const htmlEl = document.querySelector('html');
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark')
        e.target.innerHTML = "Night Mode";
    } else {
        htmlEl.classList.add('dark')
        e.target.innerHTML = "Light Mode";
    }
})


function getTime() {
    const today = new Date();
    const hour = today.getHours()
    const clockhour = hour % 12
    const min = today.getMinutes()
    const sec = today.getSeconds()
    const day = today.getDay()
    const month = today.getMonth()
    const date = today.getDate()
    const ampm = hour > 12 ? 'PM' : 'AM';
    hourEl.style.transform = `translate(-50%, -100%) rotate(${getValues(clockhour, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${getValues(min, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${getValues(sec, 0, 59, 0, 360)}deg)` 
    
    timeEl.innerHTML = `${clockhour}: ${min < 10 ? `0${min}` : min} ${ampm}`
    
    dateEl.innerHTML = `${days[day]},&nbsp;&nbsp;${months[month]}<span>${date}</span>`
    
}

setInterval(getTime, 1000);

function getValues(value, inputMin, inputMax, outputMin, outputMax) {
    return ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) + outputMin;
}

