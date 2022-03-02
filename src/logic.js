export class Project {

    constructor(name){
        this.name = name
        this.taskList = []
    }

    addTask(task){
        this.taskList.push(task)
    }

    getTasks(){
        return this.taskList
    }
}

export class Task {

    constructor(name,date,description){
        this.name = name
        this.date = date
        this.description = description
    }

    getName(){
        return this.name
    }
    getDate(){
        return this.date
    }
    getDescription(){
        return this.description
    }
}

export const mainLogic = (function(){

    function getProject(array,name){
        return array.find( elem => elem.name == name)
    }
    
    function submitTask(project){
        const taskForm = document.querySelector(".task-form")
        const inputName = document.querySelector("#input-task-name").value
        const inputDate = document.querySelector("#input-task-date").value
        const inputDescription = document.querySelector("#input-task-description").value

        const task = new Task(inputName,inputDate,inputDescription)
        taskForm.reset()

        project.addTask(task)

    }

    function deleteTask(project){

        const deleteButtons = document.querySelectorAll(".delete-task")
        Array.from(deleteButtons).forEach( button => {
            button.addEventListener("click", (e) => {
                project.getTasks().splice(e.target.parentElement.dataset.id,1)
            })
        })
    }

    function submitProject(allProjects){
        const projectForm = document.querySelector(".project-form")
        const inputProjectName = document.querySelector("#input-project-name").value

        const project = new Project(inputProjectName)
        projectForm.reset()

        allProjects.push(project)
    }

    return {
        getProject,
        submitTask,
        deleteTask,
        submitProject
    }

})()