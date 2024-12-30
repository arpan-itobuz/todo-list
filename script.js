
function addTask() {
    var inputbox = document.getElementById("inputItem");
    const task = inputbox.value;
    var list = document.getElementById("list");

    if (inputbox.value === "") {
        alert("Please enter something");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
    }
    
}



