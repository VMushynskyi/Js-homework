function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = "Please enter your name.";
  callback(name);
}

outerFunction(callbackFunction);