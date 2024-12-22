// Getting the Hour Element on the Html
const hour = document.getElementById("hour");

// Getting the Minute Element on the Html
const minute = document.getElementById("minute");

// Getting the Second Element on the Html
const second = document.getElementById("second");

const mer = document.getElementById("meridium");

// Set Interval runs a function every few miliseconds
// In this case 1000 miliseconds which is 1 second

setInterval(() => {
  // We first create a Date object that stores the current date
  const date = new Date();
  let hours = date.getHours();

  let meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  // we set the inner text (text on the webpage) of hour element to the current hour
  // which we get from the date object
  hour.innerText = hours <= 9 ? "0" + hours : hours;

  // we set the inner text (text on the webpage) of minute element to the current minute
  // which we get from the date object
  minute.innerText =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  // we set the inner text (text on the webpage) of second element to the current second
  // which we get from the date object
  second.innerText =
    date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds();

  //   mer.innerText = meridiem;
}, 1000);
