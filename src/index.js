import { mainLogic,Project } from './logic.js'
import { domManager } from './dom.js'

function init(){
	const defaultProject = new Project("default")
	let allProjects = [defaultProject]
	
	let currentProject = "default"
	
	const submitTask = document.querySelector(".submit-task")

	const addTask = document.querySelector(".new-task")
		addTask.addEventListener("click", () => {
			const form = document.querySelector(".task-hidden")
			form.setAttribute("id","task-form-view")
			form.classList.remove("task-hidden")
		})

	submitTask.addEventListener("click", (e) => {
		e.preventDefault()

		const form = document.getElementById("task-form-view")
		form.classList.add("task-hidden")
		form.removeAttribute("id")

		const addTask = document.querySelector(".new-task")
		addTask.addEventListener("click", () => {
			const form = document.querySelector(".task-hidden")
			form.setAttribute("id","task-form-view")
			form.classList.remove("task-hidden")
		})

		mainLogic.submitTask(mainLogic.getProject(allProjects,currentProject))
		domManager.renderTasks(mainLogic.getProject(allProjects,currentProject))

		deleteFunc(mainLogic.getProject(allProjects,currentProject))

	})

	function deleteFunc(project){
		const deleteButtons = document.querySelectorAll(".delete-task")
		Array.from(deleteButtons).forEach( button => {
			button.addEventListener("click", (e) => {
				project.getTasks().splice(e.target.parentElement.dataset.id,1)
				domManager.renderTasks(project)
				deleteFunc(project)
			})
		})
	}
	
	

	const submitProject = document.querySelector(".submit-project")
	

	const addProject = document.querySelector(".new-project")
		addProject.addEventListener("click", () => {
			const form = document.querySelector(".project-hidden")
			form.setAttribute("id","project-form-view")
			form.classList.remove("project-hidden")
		})

	submitProject.addEventListener("click", (e) => {
		e.preventDefault()

		mainLogic.submitProject(allProjects)
		domManager.renderProjects(allProjects)

		const form = document.getElementById("project-form-view")
		form.classList.add("project-hidden")
		form.removeAttribute("id")

		const addProject = document.querySelector(".new-project")
		addProject.addEventListener("click", () => {
			const form = document.querySelector(".project-hidden")
			form.setAttribute("id","project-form-view")
			form.classList.remove("project-hidden")
		})


		const projectList = document.querySelectorAll("li")

		Array.from(projectList).forEach( project => {
			project.addEventListener("click", (e) => {
				currentProject = e.target.textContent
				domManager.renderTasks(mainLogic.getProject(allProjects,currentProject))
			})
		})
	})
}

init()