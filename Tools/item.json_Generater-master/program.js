function generate() {
    var id = document.getElementById("id").value;
    if (id == "") {
        var id = "item";
    }
    var eattime = document.getElementById("eattime").value;
    if (eattime == ""){
        var eattime = "32";
    }
    var stack = document.getElementById("stack").value;
    if (stack == ""){
        var stack = "1";
    }
    var full = document.getElementById("full").value;
    if (full == "") {
        var full = "4";
    }
    var change = document.getElementById("change").value;
    if (change == "") {
        var change = "";
    }

    var idv = "\"identifier\": \"sample:" + id + "\"\n"
    var eattimev = "\"minecraft:use_duration\": " + eattime + ",\n"
    var stackv = "\"minecraft:max_stack_size\": " + stack + ",\n"
    var fullv = "\"nutrition\": " + full + ",\n"
    var changev = "\"using_converts_to\": \"" + change + "\"\n"

    var enchantcheck = document.getElementById("enchant");
    var eatfullcheck = document.getElementById("eatfull");
    var enchantv;
    var eatfullv;
    if (enchantcheck.checked == true) {
        enchantv = "\"minecraft:foil\": true,\n";
    } else {
        enchantv = "\"minecraft:foil\": false,\n";
    }
    if (eatfullcheck.checked == true) {
        eatfullv = "\"can_always_eat\": true,\n"
    } else {
        eatfullv = "\"can_always_eat\": false,\n"
    }
    var format = "{\n\"format_version\": \"1.10\",\n\"minecraft:item\": {\n\"description\": {\n"
    var end = "}\n}\n}\n}"

    var item
    item = format + idv + "},\n\"components\": {\n" + eattimev + stackv + enchantv + "\"minecraft:food\": {\n" + fullv + eatfullv + changev + end ;
    var itemv = document.getElementById("mv");
    itemv.innerHTML = "<pre>" + item + "</pre>"
}
    function copy() {
        var copytext = item;
        copytext.select();
        document.execCommand("copy");
        alert("dfa")
    }
