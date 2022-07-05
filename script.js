
secondHand = document.querySelector('.second')
minuteHand = document.querySelector('.minute')
hourHand = document.querySelector('.hour')


function setDate() {
    let time =  new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()
    
    let secondsDegrees = seconds*6 /* divided by 60 multiplied by 360 */
    let minutesDegrees = minutes*6 
    let hoursDegrees = hours * 30 + minutesDegrees/12 /* divided by 12 multiplied by 360 AND THEN add the degree created by the minutes*/
 
    secondHand.style.transform = `rotate(${secondsDegrees+90}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees+90}deg) scale(0.9)`
    hourHand.style.transform = `rotate(${hoursDegrees+90}deg) scale(0.7)`
}




setInterval(setDate, 1000)
