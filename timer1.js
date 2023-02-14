const timer = (input) => {
for (let timeString of input) {
  if (!Number.isInteger(+timeString)) {
    continue;
  };
  if (timeString.includes("-")) {
    continue;
  };
  if (timeString.includes("-")) {
    console.log(timeString)
    timeString = "";
    console.log(timeString)
  }; 
  const time = +timeString;
  setTimeout(() => {
    //makes system beep
    process.stdout.write('\x07');

  }, time * 1000);
}

};




timer(process.argv.splice(2));