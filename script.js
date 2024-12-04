// Fetching the elements from HTML
const inputField = document.querySelector("#inputField")
const addButton = document.querySelector("#addButton")
const todoList = document.querySelector("#todoList")

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function (){
    console.log("Clicked!")

    // Creating a variable storing the value of another variable.
    // Taking the global variable inputFiend and using the method .value to fetch a value stored in a new variable
    const inputFieldValue = inputField.value
    console.log(inputFieldValue)

    // Creates a new element to the list with the content from input after button press
    const todoItem = document.createElement("li")
    todoItem.textContent = inputFieldValue
    todoList.appendChild(todoItem)

    const finishedButton = document.createElement("button")
    finishedButton.textContent = "Ferdig"
    todoItem.appendChild(finishedButton)

    finishedButton.addEventListener("click", function () {
        console.log("Clicked!")
        todoItem.style.textDecoration = "line-through"
    })

    // Lag en slett-knapp med samme teknikk som vi lagde ferdig-knapp
    const removeButton = document.createElement("button")
    removeButton.textContent = "Slett"
    todoItem.appendChild(removeButton)

    removeButton.addEventListener("click", function () {
        console.log("Clicked!")
        todoItem.remove()
    })
})