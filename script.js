const todolist = [];
const completeTodo = [];

const buttonAdd = document.querySelector(".fas.fa-plus");

function clearTodolist() {
  const todolistBody = document.getElementById("showTodo");
  while (todolistBody.firstChild) {
    todolistBody.removeChild(todolistBody.firstChild);
  }
}

function clearAllList() {
  todolist.splice(0, todolist.length);
  //   completeTodo.splice(0, completeTodo.length);
  displayTodolist();
}

function removeTodoList(index) {
  todolist.splice(index, 1);
  displayTodolist();
}

function completedTodo(index) {
  completeTodo.push(todolist[index]);
  const complete = todolist[index];
  console.info(complete);
  console.info(completeTodo);
  addCompleteList(complete);
}

function addTodoList(index, todo) {
  const showTodo = document.getElementById("showTodo");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const container = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-check");
  p.textContent = todo;
  div.append(icon);
  container.append(div, p);
  container.classList.add("container");
  showTodo.append(container);
  div.addEventListener("click", function () {
    completedTodo(index);
    removeTodoList(index);
  });
}

function addCompleteList(complete) {
  const completeP = document.querySelector(".length");
  completeP.textContent = completeTodo.length;
  const complTodo = document.querySelector(".completeList");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const container = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-check");
  p.textContent = complete;
  div.append(icon);
  container.append(div, p);
  container.classList.add("container");
  complTodo.append(container);
}

function displayTodolist() {
  clearTodolist();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    addTodoList(i, todo);
  }

  const complpeteDiv = document.getElementById("completeTodo");
  if (completeTodo.length == 0) {
    complpeteDiv.style.display = "none";
  } else {
    complpeteDiv.style.display = "block";
  }
}

function addList() {
  const todo = document.getElementsByTagName("input")[0].value;
  todolist.push(todo);

  document.getElementsByTagName("input")[0].value = "";

  console.info(todolist);
  displayTodolist();
}

const input = document.getElementsByTagName("input")[0];
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    addList();
  }
});

buttonAdd.addEventListener("click", function () {
  addList();
});

displayTodolist();

const optionButton = document.querySelector("#header .right");
optionButton.addEventListener("click", function () {
  const option = document.querySelector(".option");
  option.classList.toggle("optionActive");
});

const theme = document.querySelectorAll(".option ul li");

for (let i = 0; i < theme.length; i++) {
  theme[i].addEventListener("click", function () {
    if (i < 5) {
      document.body.style.background = theme[i].getAttribute("value");
    } else {
      document.body.style.background = `url('img/${i + 1}.jpg')`;
    }
  });
}

const printList = document.querySelector(".printList label");
printList.addEventListener("click", function () {
  window.print();
});

const clearList = document.querySelector(".clearList label");
clearList.addEventListener("click", function () {
  clearAllList();
});

const showComplete = document.querySelector("#completeTodo .title");
showComplete.addEventListener("click", function () {
  const complpeteList = document.querySelector("#completeTodo .completeList");
  console.info(complpeteList);

  const rotateButton = document.querySelector("#completeTodo .title i");
  if (complpeteList.classList.contains("block")) {
    rotateButton.style.transform = "rotate(0deg)";
  } else {
    rotateButton.style.transform = "rotate(90deg)";
  }

  complpeteList.classList.toggle("block");

  // complpetes.forEach(function (e) {
  //   // e.style.display = "flex";
  //   e.classList.toggle("flex");
  // });
});

// console.info(document.body)

// const themes = document.querySelectorAll('.option ul li');
// for(let theme of themes) {
//     theme.addEventListener('click', function() {
//         console.info(theme[0]);
//     })
// }
