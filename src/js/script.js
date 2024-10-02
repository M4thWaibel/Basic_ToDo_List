const btn = document.querySelector("button")
const input = document.querySelector("input")
const completeList = document.querySelector("ul")

let listItems = []

function newTask(){
    listItems.push({
        task:input.value,
        check: false,
    })

    input.value = ''

    showTasks()
}


function showTasks(){
    let newList = ''

    listItems.forEach((item, position) => {
        newList = 
            newList + 
            `
                <li>
                    ${item.task}
                    <span onClick='deleteTask(${position})'> 🗑️ </span>
                </li>
            `
    })

    completeList.innerHTML = newList

    localStorage.setItem('List', JSON.stringify(listItems))
}

function checkTask(position){
    listItems[position].check = !listItems[position].check

    showTasks()
}

function deleteTask(position){
    listItems.splice(position, 1)

    showTasks()
}

function reloadTasks(){
    const localStorageTask = localStorage.getItem('list')

    if(localStorageTask){
        listItems = JSON.parse(localStorageTask)
    }

    showTasks()
}

input.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const inputTask = e.target.value

        newTask(inputTask)
    }
})

reloadTasks()


