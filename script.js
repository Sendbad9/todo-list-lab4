class Task{
constructor(text){
this.text = text
this.completed = false
}
}

let tasks = []

function addTask(){

let input = document.getElementById("taskInput")
let taskText = input.value

if(taskText === "") return

let task = new Task(taskText)

tasks.push(task)

renderTasks()

input.value = ""
}

function renderTasks(){

let list = document.getElementById("taskList")

list.innerHTML = ""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

li.innerHTML = `
<span onclick="toggleTask(${index})"
class="${task.completed ? 'completed':''}">
${task.text}
</span>

<button onclick="deleteTask(${index})">
Delete
</button>
`

list.appendChild(li)

})

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed

renderTasks()

}

function deleteTask(index){

tasks.splice(index,1)

renderTasks()

}