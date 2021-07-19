console.log('------------- #3')
function decrimentOrIncrement(a, b, dec = false) {
    if (a < b + 1 && !dec) {
        console.log(a)
        a++
        decrimentOrIncrement(a,b)
    } else if (a >= b) {
        console.log(a)
        a--
        decrimentOrIncrement(a,b,true)
    }
}
decrimentOrIncrement(22,8)
console.log('------------- #4')
const date = document.getElementById('date');

var timerFullDate = setInterval(setDate,1000)
var timerShortDate
var formatDate = 'full'

function setDate(full = true) {
    const currentDate = new Date();
    let hours = currentDate.getHours() < 10 ? '0'+currentDate.getHours() : currentDate.getHours()
    let minutes = currentDate.getMinutes() < 10 ? '0'+currentDate.getMinutes() : currentDate.getMinutes()
    let seconds = currentDate.getSeconds() < 10 ? '0'+currentDate.getSeconds() : currentDate.getSeconds()

    if (full) {
        date.innerHTML = `${hours}:${minutes}:${seconds}`
    } else {
        date.innerHTML = `${hours}:${minutes}`
    }
}

date.addEventListener('click', changeFormat)
function changeFormat() {
    if (formatDate === 'full') {
        formatDate = 'short'
        clearInterval(timerFullDate)
        timerShortDate = setInterval( () => setDate(false),1000)
    } else {
        formatDate = 'full'
        clearInterval(timerShortDate)
        timerFullDate = setInterval(setDate,1000)
    }

}
