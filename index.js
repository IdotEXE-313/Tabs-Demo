const changeContent = (city = "") => {
    let text = document.getElementById('text');
    let heading = document.getElementById('location');
    heading.innerText = city;
    text.innerText = setText(city);
}

const setText = (city) => {
    switch(city){
        case "London":
            return "London is the capital city of England.";
        case "Paris":
            return "Paris is the capital city of France";
        case "Tokyo":
            return "Tokyo is the capital city of Japan";
        default:
            return "";
    }
}

window.onload = () => {
    let btn = document.getElementsByClassName("button-style");
    btn.onclick = changeContent(btn.value);
}