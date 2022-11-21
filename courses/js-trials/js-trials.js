let age = window.prompt("What's your age?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy bday! You are ", age, "years old.");