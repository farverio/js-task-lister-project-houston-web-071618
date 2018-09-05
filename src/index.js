document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  const newListForm = document.querySelector("#create-list-form")

  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const lists = document.getElementById("lists");

  const app = new TaskLister();
  
  function addList(e) {
    e.preventDefault()
    let listName = e.target.elements[0].value
    let listNames = appData.lists.map( list => list.name)
    
    if(listNames.includes(listName)) {
      return alert('List titles must be unique')
    } 
    
    let listObject = new List(listName)
    listDiv.innerHTML = app.render()
    lists.innerHTML += listObject.render()
    
    const newTaskForm = document.querySelector("#create-task-form")
    
    newTaskForm.addEventListener("submit", e => addTask(e))
  }
  
  function addTask(e) {
    e.preventDefault()
    let taskDescription = e.target.elements[1].value
    let taskDescriptions = appData.tasks.map( task => task.description) 
    let taskList = e.target.elements[0].value
    let taskPriority = e.target.elements[2].value
    let taskListObject = appData.lists.find(listObject => listObject.name === taskList)
     
     debugger
    if(taskListObject.taskDescriptions().includes(taskDescription)) {
      return alert('Task descriptions must be unique')
    } 
    
    let taskObject = new Task(taskDescription, taskPriority, taskListObject)
    
    let parentListDiv = lists.querySelector(`#${taskListObject.name}`)
    // debugger
    parentListDiv.outerHTML = taskListObject.render() // this is wrong. need to update ONLY parent list container NOT lists.innerHTML
  }
  
  newListForm.addEventListener("submit", e => addList(e))
});
