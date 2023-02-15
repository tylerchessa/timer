const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const callQuestion = () => {
rl.question('Press a number between 1-9 for a countdown in seconds or press "b" to test sound \n', (answer) => {
if (answer.toLowerCase() === "b") {
  console.log("here it the test sound") 
} if (!Number.isInteger(+answer) && answer.toLowerCase() !== "b"){
  console.log('please enter a number')
} 
const time = +answer;
    setTimeout(() => {
      //makes system beep
      process.stdout.write('\x07');
      console.log(`it has been ${answer} seconds.`)
      callQuestion();
    }, time * 1000);
 
});

}

callQuestion();







// const timer = (input) => {
//   for (let timeString of input) {
//     if (!Number.isInteger(+timeString)) {
//       continue;
//     };
//     if (timeString.includes("-")) {
//       continue;
//     };
//     if (timeString.includes("-")) {
//       console.log(timeString)
//       timeString = "";
//       console.log(timeString)
//     }; 
//     const time = +timeString;
//     setTimeout(() => {
//       //makes system beep
//       process.stdout.write('\x07');
  
//     }, time * 1000);
//   }
  
//   };

//   timer(process.argv.splice(2));