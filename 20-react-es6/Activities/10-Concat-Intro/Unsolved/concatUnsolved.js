const appointments = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "9:30 AM",
  "11:00 AM",
  "12:00 PM"
];

// 1. Run the concat method on the appointments array to create a new array. Add on two additional times
// of your choice and console.log the result
const appointments2 = appointments.concat(["1:00 PM", "2:00 PM"]);
// console.log(appointments2);

const candies = ["Starbursts", "Sweedish Fish", "Sour Patch Kids"];

const chocolates = ["Hersheys", "Crunch Bar", "Twix"];

// 2. Using the concat method, create a brand new array that combines candies and chocolates
// console log the result
const diabetes = candies.concat(chocolates);
// console.log(diabetes);

let oneThroughTen = [1, 2, 3, 4];

// 3. Using the concat method, reassign the value of the oneThroughTen array to have the
// remaining numbers (5-10) added on. Make sure to save this completed array in the same
// oneThroughTen variable. console log the updated array
oneThroughTen = oneThroughTen.concat([5,6,7,8,9,10]);
console.log(oneThroughTen);
