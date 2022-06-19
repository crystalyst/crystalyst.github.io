const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    // array -> string
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // then, string -> live array that JS understands
}

function deleteToDo(event) {
    // need to know which parent element
    // target -> html element that was clicked
    // parentElement -> the parent of the element clicked
    //console.dir(event.target.parentElement.innerText);

    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = `${newToDoObj.text}`;
    
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // localstorage does not save arrays
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of " + item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos); // just a string

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //console.log(parsedToDos);
    // shorter way
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));

    parsedToDos.forEach(paintToDo);
    // forEach function executes painToDo on each element of parsedToDos array.
    //paintToDo({text:asda, id:131241})

}
// forEach -> allows us to execute a function on each item of the array

// filter: we create a new array without the item we want to delete

function sexyFilter() {

}

[1, 2, 3, 4].filter(sexyFilter);
// sexyFilter should return true if you want to retain that element in your new array
// sexyFilter(1)
// sexyFilter(2)
// sexyFilter(3)
// sexyFilter(4)
// function sexyFilter(item) { return item !== 3 } // create an array without 3
