const catAge = document.getElementById("age");
const catName = document.getElementById("name");
const submit = document.getElementById("submit");

submit.onclick = function(){
    if (catName.value.length != 0) {
        calculate();
    }
    else {
        alert("Name field empty. Please enter a name.");
    }
}

function calculate(){

    if (catAge.value == 0) {
        alert(catName.value + " is 0 years old in human years! Who wudda thunk.")
    }

    else if (catAge.value == 1) {
        alert(catName.value + " is 15 years old in human years! God help you..")
    }

    else if (catAge.value == 2) {
        alert(catName.value + " is 24 years old in human years! He's all grown up!")
    }

    else {
        let humanAge = 24 + ((catAge.value-2) * 4);
        alert(catName.value + " is " + humanAge + " years old!")
    }
}