

var myVar = setInterval(myTimer, 50);

function myTimer() {
    var el = document.getElementById("clickFirst");
    if (el) {
        el.click();
        myStopFunction();
    }
}

function myStopFunction() {
  clearInterval(myVar);
}