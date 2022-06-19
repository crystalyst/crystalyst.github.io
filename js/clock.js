const clock = document.querySelector("h2#clock");

// clock.innerHTML = "00:00";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
// In every second, we are creating a new Date object -> which has the information of hours, minutes, and seconds

// setInterval - runs a function in every few second
// - takes two arguments

// 1000ms -> every second

getClock(); // call getclock immediately not to wait for 1s for the clock to appear
setInterval(getClock, 1000); // 5000ms -> every 5s (sayHello is called every 5s)

// we would like to run a function after a certain amount of time
// setTimeout

// setTimeout(sayHello, 5000);

// we will use Date object
// new Date() -> gives today


// padStart() -> a function you can apply for strings
// you want numbers to be two digits always -> like 01, 07
// "1".padStart(2, "0") -> '01 
// -> if the string in front does not match 2 characters long, then put "0" until it matches the length of 2

// padEnd() follows the same logic, but works otherwise
// "1".padEnd(2, "0") -> '10'

