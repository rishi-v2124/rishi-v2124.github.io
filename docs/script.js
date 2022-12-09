const savedTheme = localStorage.getItem('backgroundColor');
if (savedTheme) {
    document.querySelector("html").style.backgroundColor = savedTheme;
}

let backgroundColorBtn = document.getElementById("backgroundColorSubmit");
let resetBtn = document.getElementById("resetBackgroundColor");

function changeBackgroundColor() {
    let rgbVal = document.getElementById("rgbColor").value;
    localStorage.setItem('backgroundColor', rgbVal);
    location.reload();
}

function resetBackgroundColor() {
    localStorage.clear();
    location.reload();
}

backgroundColorBtn.addEventListener('click', changeBackgroundColor);
resetBtn.addEventListener('click', resetBackgroundColor);