const addIcon = document.getElementById("addicon")
const theTodos = document.getElementById("thetodos")

let counter = 0;

addIcon.addEventListener("click", () => {

    counter++;

    let currentdate = new Date();

    if (counter <= 15) {
        const todo = document.createElement("div")
        const removeX = document.createElement("div")
        const date = document.createElement("p")
        const task = document.createElement("input")

        todo.classList.add("check")

        localStorage.setItem(todo.outerHTML + counter, "lo")

        //main
        todo.style.position = "relative"
        todo.style.left = "50%"
        todo.style.transform = "translateX(-50%)"
        todo.style.marginBottom = "15px"

        todo.style.width = "600px"
        todo.style.height = "90px"
        todo.style.backgroundColor = "white"
        todo.style.borderRadius = "5px"

        //remove
        removeX.addEventListener("click", () => {
            removeTodo(theTodos, todo)
        })
        removeX.style.cursor = "pointer"
        removeX.style.position = "absolute"
        removeX.style.right = "0"
        removeX.style.height = "90px"
        removeX.style.width = "100px"
        removeX.style.backgroundColor = "red"

        //date
        date.innerHTML = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate() + " || " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();;
        date.style.marginLeft = "12px"
        date.style.position = "absolute"
        date.style.top = "55px"

        //task
        task.setAttribute("spellcheck", "false")
        task.value = "Click To Edit Me"
        task.style.border = "0px"
        task.style.outline = "none"
        task.style.fontSize = "25px"
        task.style.marginLeft = "7px"
        task.style.position = "relative"
        task.style.top = "10px"
        task.style.width = "480px"



        theTodos.appendChild(todo)
        todo.appendChild(removeX)
        todo.appendChild(task)
        todo.appendChild(date)


    }
})


function removeTodo(element, todo) {

    element.removeChild(todo)
    counter--;

}

