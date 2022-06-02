// My Tasks Basic Start Code

// 1. FIRST COMPLETE BASIC FUNCTIONALITY
// Write code for the displayTasks, addTask, removeTask and clearAll functions

// 2. THEN IMPLEMENT PERSISTENT DATA
// Add localStorage to make the data persistent (I can help with this)

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let tasksEl = document.getElementById("tasks");

// Global Variables
let tasks = initTasks();
displayTasks();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "add") {
    addTask();
  } else if (selection === "remove") {
    removeTask();
  } else if (selection === "clear") {
    clearAll();
  }
}

function displayTasks() {
  // Diplay all tasks by putting them in the 'tasksEl' <div>
 

  let tasksStr = '';
  for (let i=0; i < tasks.length; i++) {
    tasksStr += `<p>${i + 1}: ${tasks[i]}</p>`
  }
  tasksEl.innerHTML = tasksStr;
}

function addTask() {
  // Prompt user for a new task
  // Add task to tasks array
  tasks.push(prompt("Add a new task"));
  saveTasks();

  // Display all tasks to show changes
  displayTasks();
}

function removeTask() {
  // Prompt user for task to remove
  let numTask = prompt("Type the number of the task you would like to remove");
  // Remove task from task array (if it exists)
  if (numTask <= tasks.length ){
    tasks.splice(numTask-1, 1);
    saveTasks();
  } else {
    alert("That Task does not exist");
  }
  // Display all tasks to show changes
  displayTasks();
}

function clearAll() {
  // Clear all tasks
  let confirm = prompt("Are you sure you want to clear all tasks? (Type 'yes')");
  if (confirm = "yes") {
    tasks = [];
    saveTasks(); 
  }
  displayTasks();
}

function saveTasks() {
  localStorage.setItem("savedTasks", JSON.stringify(tasks))
}

function initTasks() {
  return JSON.parse(localStorage.getItem("savedTasks")) ?? []
}