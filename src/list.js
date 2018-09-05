class List {
  // your code here  
  constructor(name) {
    this.name = name
    appData.lists.push(this)
  }
  
  tasks() {
    return appData.tasks.filter(task => task.list.name === this.name)
  }
  
  taskDescriptions() {
    return this.tasks().map(task => task.description)
  }
  
  render() {
    let tasksText = ""

    this.tasks().forEach(taskObject => {
      tasksText += `
      <li>
        Task: ${taskObject.description}
        <button data-list-title="${taskObject.list.name}" data-task-name="${taskObject.description}" class="delete-task">
            X
        </button>
        <br>
        Priority: low
      </li>`
    })
    
    
    return(`
      <div id=${this.name}>
      <h2>${this.name}
      <button data-title="${this.name}" class="delete-list">
      X
      </button>
      </h2>
      <ul>
        ${tasksText}
      </ul>
      </div>
    `)  
  }  
}
