function setLiButton(li) {
    var isToDoDone = false
    var doneButton = document.createElement("button")
    var icon = document.createElement('i')
    doneButton.className = "done-btn"
    icon.className = "fa-regular fa-circle fa-xg"
    doneButton.appendChild(icon)
    li.appendChild(doneButton)

    doneButton.onclick = function () {
        if (icon.className === "fa-regular fa-circle") {
            icon.className = "fa-regular fa-circle-check"
            li.classList.remove('item-undone')
            li.classList.add('item-done')
            li.parentElement.removeChild(li);
            document.getElementById('list-done-todo').appendChild(li)
        }
        else if (icon.className = "fa-regular fa-circle-check") {
            icon.className = "fa-regular fa-circle"
            li.classList.remove('item-done')
            li.classList.add('item-undone')
            li.parentElement.removeChild(li);
            document.getElementById('list-todo').appendChild(li)
        }
    }
}
function addToDo() {
    const inputValue = document.getElementById('txtInput').value
    if (nullCheck(inputValue) <= 0) {
        alert('Please Enter ToDo!')
        return
    }
    var li = document.createElement('li')
    li.classList.add('item-undone')
    setLiButton(li);
    //string oluşturan kod
    var toDoInput = document.createTextNode(inputValue)
    li.appendChild(toDoInput)
    //UL ye eriş
    const listToDo = document.getElementById('list-todo')
    listToDo.appendChild(li)
    document.getElementById('txtInput').value = "";
}
function nullCheck(input) {
    var trimmedInput = input.trim();
    var inputArr = trimmedInput.split(""); //--> array dönüyor
    return inputArr
}




