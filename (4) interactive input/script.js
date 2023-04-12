function checkText() {
    let input = document.getElementById("inputText").value.toLowerCase();
    let background = document.body;

    if (input === "") {
        alert("Wrong! Input is empty ");
    } else if (input === "hello") {
        background.style.backgroundColor = "#539165";
    } else if (input === "world") {
        background.style.backgroundColor = "#3F497F";
    } else {
        background.style.backgroundColor = "#DF2E38";
    }
}