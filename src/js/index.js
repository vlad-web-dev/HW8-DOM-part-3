console.log('------------- #3')
function decrimentOrIncrement(a, b, dec = false) {
    if (a < b + 1 && !dec) {
        console.log(a)
        a++
        decrimentOrIncrement(a,b)
    } else if (a >= b && dec) {
        console.log(a)
        a--
        decrimentOrIncrement(a,b,true)
    }
}
decrimentOrIncrement(1,5)
console.log('------------- #4')
const time = document.getElementById('time');

setInterval(setDate,1000)

function setDate() {
    const currentDate = new Date();
    let hours = currentDate.getHours() < 10 ? '0'+currentDate.getHours() : currentDate.getHours()
    let minutes = currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes() : currentDate.getMinutes()
    let seconds = currentDate.getSeconds() < 10 ? '0'+currentDate.getSeconds() : currentDate.getSeconds()

    if (time.classList.contains('full')) {
        time.innerHTML = `${hours}:${minutes}:${seconds}`
    } else {
        time.innerHTML = `${hours}:${minutes}`
    }
}

time.addEventListener('click', changeFormat)

function changeFormat() {
    time.classList.toggle('full')
}
