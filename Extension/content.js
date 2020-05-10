// content.js
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

window.addEventListener('mousemove', function (e) {
  blob=blob+e;
}); 

window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";
  (e || window.event).returnValue = confirmationMessage;
  saveAs(blob, "hello.txt");
  // saveText("output.txt", myStrText); //Gecko + IE
  return confirmationMessage;                            //Webkit, Safari, Chrome
});

// function saveText(filename, text) {
//   var tempElem = document.createElement('a');
//   var myStrText=JSON.stringify(text);
//   tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   tempElem.setAttribute('download', filename);
//   saveAs(myStrText, 'output.txt');
//   tempElem.click();
//   saveAs(myStrText, 'output.txt');
// };
