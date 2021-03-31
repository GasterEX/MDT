function run() {
    var textv = document.getElementById("text").value;
        if (textv == "") {
            alert("Textが未入力です。")
        }
    var selectorv = document.getElementById("selector").value;
    switch (selectorv) {
        case "@a":
        break;

        case "@s":
        break;

        case "@p":
        break;

        case "@e":
        break;

        case "@r":
        break;

        case "":
            alert("セレクターが未入力です。")
        break;

        default:
            alert("不明なセレクターです。");
        break;
    }
    var tellrawv = document.createTextNode
    ("/tellraw" + " " + selectorv + " " + "{\"rawtext\":[{\"text\":\"" + textv + "\"}]}");
    var element = document.createElement ("p")
    document.body.appendChild(element).appendChild(tellrawv);
}
