
let userName = prompt("Adınızı Giriniz: ");

let user= document.querySelector("#myName")
user.innerHTML = `${userName}`;

let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${myClock}`;

function currentTime() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var day = date.getDay();
    var currentDay = ""

    if ( day == 0) {
        currentDay = "Pazar"
    } else if (day == 1) {
        currentDay = "Pazartesi"
    } else if (day == 2) {
        currentDay = "Salı"
    } else if (day == 3) {
        currentDay = "Çarşamba"
    } else if (day == 4) {
        currentDay = "Perşembe"
    } else if (day == 5) {
        currentDay = "Cuma"
    } else {
        currentDay = "Cumartesi"
    } 
    myClock.innerHTML =`${("0"+hour).substr(-2)}:${("0"+min).substr(-2)}:${("0"+sec).substr(-2)} ${currentDay}`
    span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " + HaftaGün;
}

setInterval(currentTime, 1000);
