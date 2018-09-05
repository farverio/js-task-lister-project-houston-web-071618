class Task {
  // your code here
  
  constructor(description, priority, list) {
    this.description = description
    this.priority = priority
    this.list = list
    appData.tasks.push(this)
  }
}
