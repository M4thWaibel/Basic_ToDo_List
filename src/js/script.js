const btn_Add = document.querySelector(".Add");
const input = document.querySelector("input");
const completeList = document.querySelector("ul");

let listItems = [];

function newTask(){

    //Verificação de campo em branco
    if(input.value.trim() === ''){
        alert('Insira uma tarefa.');
        return; //sai da função sem adicionar tarefa
    }

    listItems.push({
        task:input.value.trim(),
        check: false,
    })

    input.value = '';//Limpa o campo input

    showTasks();//Atualiza lista
}

function showTasks(){
    let newList = '';

    listItems.forEach((item, position) => {
        newList += 
            `
                <li>
                    ${item.task}
                    <span onClick='deleteTask(${position})'> 🗑️ </span>
                </li>
            `;
    });

    completeList.innerHTML = newList;

    localStorage.setItem('List', JSON.stringify(listItems));//Armazena no LocalStorage
}

function checkTask(position){
    listItems[position].check = !listItems[position].check;

    showTasks();
}

function deleteTask(position){
    listItems.splice(position, 1);//Remove tarefa selecionada

    showTasks();
}

function reloadTasks(){
    const localStorageTask = localStorage.getItem('List');

    if(localStorageTask){
        listItems = JSON.parse(localStorageTask);//Carrega tarefas salvas
    }

    showTasks();
}

//verificação de tecla "Enter"
input.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const inputTask = e.target.value;

        newTask();
    }
})

reloadTasks()

function updateButtonText(){
    if(window.innerWidth <= 834){
        btn_Add.textContent = "+";
    }else{
        btn_Add.textContent = "Adicionar";
    }
}

updateButtonText();
window.addEventListener('resize', updateButtonText);
