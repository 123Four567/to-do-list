import { mainLogic,Project } from './logic.js'
import { domManager } from './dom.js'

function init(){
	const defaultProject = new Project("default")
	let allProjects = [defaultProject]
	
	let currentProject = "default"
	
	const submitTask = document.querySelector(".submit-task")

	submitTask.addEventListener("click", (e) => {
		e.preventDefault()

		mainLogic.submitTask(mainLogic.getProject(allProjects,currentProject))
		domManager.renderTasks(mainLogic.getProject(allProjects,currentProject))

	})

	const submitProject = document.querySelector(".submit-project")
	

	submitProject.addEventListener("click", (e) => {
		e.preventDefault()

		mainLogic.submitProject(allProjects)
		domManager.renderProjects(allProjects)

		const projectList = document.querySelectorAll("li")

		Array.from(projectList).forEach( project => {
			project.addEventListener("click", (e) => {
				currentProject = e.target.textContent
				domManager.renderTasks(mainLogic.getProject(allProjects,currentProject))
				console.log(currentProject)
			})
		})
	})
}

init()