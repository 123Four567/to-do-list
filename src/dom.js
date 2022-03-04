import mainLogic from './logic.js'

export const domManager = (function(){

    let index = 0
    
    function renderTasks(project){
        const taskView = document.querySelector(".task-view")
        taskView.innerHTML = ""

        let tasks = project.getTasks()

        const taskTitle = document.createElement("h2")
        taskTitle.textContent = "Tasks"
        taskView.appendChild(taskTitle)

        tasks.forEach( task => {
            
            const taskContainer = document.createElement("div")
            taskContainer.classList.add("task-container")
            taskContainer.dataset.id = index

            const taskName = document.createElement("div")
            taskName.classList.add("show-task-name")
            taskName.textContent = task.name
            taskContainer.appendChild(taskName)
            
            const taskDate = document.createElement("div")
            taskDate.classList.add("show-task-date")
            taskDate.textContent = task.date
            taskContainer.appendChild(taskDate)

            const taskDescription = document.createElement("div")
            taskDate.classList.add("show-task-description")
            taskDescription.textContent = task.description
            taskContainer.appendChild(taskDescription)

            const deleteBtn = document.createElement("button")
            deleteBtn.classList.add("delete-task")
            deleteBtn.textContent = "Delete"
            taskContainer.appendChild(deleteBtn)

            index += 1
            taskView.appendChild(taskContainer)
        });

        index = 0

        const taskButton = document.createElement("button")
        taskButton.classList.add("new-task")
        taskButton.textContent = "Create new task"
        taskView.appendChild(taskButton)

        /* Add listeners for the addTask button and all the deleteTask buttons */
        taskButton.addEventListener("click", () => {
            const form = document.querySelector(".task-hidden")
            form.classList.remove("task-hidden")
            form.setAttribute("id","task-form-view")
        })
    }

    function renderProjects(allProjects){
        const projectDOM = document.querySelector(".project-nav")

        projectDOM.innerHTML = ""

        allProjects.forEach( project => {
            const li = document.createElement("li")
            li.textContent = project.name

            projectDOM.appendChild(li)
        })

    }

    return {
        renderTasks,
        renderProjects
    }

})()