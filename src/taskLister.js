class TaskLister {
  // your solution here
  constructor() {

  }

  render() {
    let optionText = ""

    appData.lists.forEach(listObject => {
      optionText += `<option value="${listObject.name}">${listObject.name}</option>`
    })

    return(
    `<div id="app-content">
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          ${optionText}
        </option>
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
    </div>`)

  }

  deleteTasks(listToDelete) {
    return appData.tasks = appData.tasks.filter(task => task.list.name !== listToDelete)
  }

  deleteList(listToDelete) {
    return appData.lists = appData.lists.filter(list => list.name !== listToDelete)
  }

  deleteTask(taskToDelete) {
    return appData.tasks = appData.tasks.filter(task => task !== taskToDelete)
  }
}
