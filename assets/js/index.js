const secondHand = document.querySelector(".second-hand")
const minuteHand  = document.querySelector(".min-hand")
const hourHand  = document.querySelector(".hour-hand")
function setDate(){

    const currentDate = new Date()
    const seconds = currentDate.getSeconds();
    secondsDegree= ((seconds / 60) * 360) +90
    if (seconds === 0){
        secondHand.style.transition = "none"
    }
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const minutes  = currentDate.getMinutes();
    minutesDegree = ((minutes / 60 ) *360) + 90;
    if (minutes == 0 ){
        minuteHand.style.transition = "none"
    }
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`

    const hours = currentDate.getHours();

    hourDegree = ((hours  / 12)  * 360)  + 90
    console.log(hourDegree)
    if (hours == 0 ){
        hourHand.style.transition = "none"
    }
    hourHand.style.transform = `rotate(${hourDegree}deg)`


}





setInterval (setDate, 1000)
