let changBtn = document.getElementById("change-btn");
let colorCode = document.getElementById("color-code");
changBtn.addEventListener("click", function () {
    let color = [];
    let rgbColor;
    let textColor;
    for (let i = 0; i < 3; i++) {
        color[i] = Math.floor(Math.random() * 256);
    }
    textColor=`RGB(${255-color[0]}, ${255-color[1]}, ${255-color[2]})`;
    colorCode.style.color=textColor;
    rgbColor = `RGB(${color[0]}, ${color[1]}, ${color[2]})`;
    colorCode.innerHTML = rgbColor;
    document.body.style.backgroundColor = rgbColor;
}
);
