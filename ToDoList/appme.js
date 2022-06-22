const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList= document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter')
const date = document.querySelector('#date')


// DOM event listeners
document.addEventListener('DOMContentLoaded', getTasks)
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks)

//Get tasks from LS
// Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task){
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');

      // Add class
      link.className = 'delete-item secondary-content';

      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
    });
  }

// Add a task
function addTask(e) {
    if(taskInput.value === '') {
      alert('Add a task');
    }
  
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
  
    // Append li to ul
    taskList.appendChild(li);
  
    // Store in LS
    storeTaskInLocalStorage(taskInput.value);
  
    // Clear input
    taskInput.value = '';
  
    e.preventDefault();
  }


// Store task

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      
        e.target.parentElement.parentElement.remove();
  
        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
  


// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  


// Clear Tasks
function clearTasks() {
    taskList.innerHTML ='';
}





//Filter Tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase() // Gives us whetever being typed in. Also is locked to 

    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none'
            }


            });
        }


// Add date to the top of the HTML

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
var currDate = d.getDate()
var currMonth = monthNames[d.getMonth()];
var today = currDate+'-'+currMonth

console.log(today)

document.getElementById("date").innerHTML+= today
document.getElementById("date").style.fontSize = "30px";





