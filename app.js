const catAge = document.getElementById("age");
const catName = document.getElementById("name");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function(){

    if (catName.value.length != 0) {

        if (catAge.value.length != 0 && catAge.value >= 0) {
            calculate();
        }

        else {
            alert("Invalid age. Please enter a vaild age")
        }
    }

    else {
        alert("Invalid name. Please enter a valid name.");
    }
}

function calculate(){

    let catMsg;

    if (result.hasChildNodes()) {
        result.removeChild(result.firstChild);
    }

    if (catAge.value == 0) {
        catMsg = document.createElement('p');
        catMsg.innerHTML = catName.value + " is 0 years old in human years! Who wudda thunk.";
        result.appendChild(catMsg);
    }

    else if (catAge.value == 1) {
        catMsg = document.createElement('p');
        catMsg.innerHTML = catName.value + " is 15 years old in human years! God help you..";
        result.appendChild(catMsg);
    }

    else if (catAge.value == 2) {
        catMsg = document.createElement('p');
        catMsg.innerHTML = catName.value + " is 24 years old in human years! They're all grown up!";
        result.appendChild(catMsg);
    }

    else {
        let humanAge = 24 + ((catAge.value-2) * 4);
        catMsg = document.createElement('p');
        catMsg.innerHTML = catName.value + " is " + humanAge + " years old! Awesome!";
        result.appendChild(catMsg);
    }
}