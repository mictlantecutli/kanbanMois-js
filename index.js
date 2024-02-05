import Kanban from "./kanban.js";

const todo = document.querySelector(".cards.todo");
const pending = document.querySelector(".cards.pending");
const completed = document.querySelector(".cards.completed");

const taskbox = [todo, pending, completed];

function addTaskCard(task, index){
  const element = document.createElement("form");
  element.className = "card";
  element.draggable = true;
  element.dataset.id = task.taskId;
  element.innerHTML = `
      <input value="${task.content}" type="text" name="task" autocomplete="off"
      disabled="disabled">
    <div>
      <span class="task-id">#${task.taskId}</span>
      <span>
        <button class="bi bi-pencil edit" data-id="${task.taskId}"></button>
        <button class="bi bi-check-lg update hide" data-id="${task.taskId}"></button>
        <button class="bi bi-trash3 delete" data-id="${task.taskId}"></button>
      </span>
    </div>
`;

taskbox[index].appendChild(element);
}

Kanban.getAllTask().forEach((tasks, index) =>{
  tasks.forEach(task =>{
    addTaskCard(task, index);
    

  })
});



//console.log(Kanban.getAllTask());
//console.log(Kanban.getTasks(1));

//There are two "Edit Kanban Project Lectures" because I save the project two times
//This show up me the 'return'
//console.log(Kanban.insertTask(0, "moicas moicas moicas"));

//Kanban.deleteTask(55827);

//console.log(Kanban.getTasks(1));

// console.log(Kanban.getAllTask());

// Kanban.updateTask(38833, {
//   columnId:1,
//   content: "Record JavaScript Preview02"
// });  

// console.log(Kanban.getAllTask());
