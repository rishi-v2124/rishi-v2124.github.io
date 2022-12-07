function createAlert() {
    alert("Hello, world!");
}

// Clicking the "Bigger" button in the HTML will make the text font change to 24pt.
function makeTextBigger() {
    document.getElementById("mytextarea").style.fontSize = "24pt";
}

// When the FancyShmancy radio button is selected, this will make the text fancier.
function fancify() { 
    document.getElementById("mytextarea").style.fontWeight = "bold";
    document.getElementById("mytextarea").style.color = "blue";
    document.getElementById("mytextarea").style.textDecoration = "underline";    
}

// When BoringBetty is selected, it will return the textarea to normal.
function unfancify() {
    document.getElementById("mytextarea").style.fontWeight = "normal";
    document.getElementById("mytextarea").style.color = "black";
    document.getElementById("mytextarea").style.textDecoration = "none";
}

function moo() {
    let text = document.getElementById("mytextarea").value;
    let parts = text.split(".");
    document.getElementById("mytextarea").value = parts.join("-Moo");
}