(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{IK:()=>n,eD:()=>s});class n{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}getTasks(){return this.taskList}}class r{constructor(e,t,n){this.name=e,this.date=t,this.description=n}getName(){return this.name}getDate(){return this.date}getDescription(){return this.description}}const s={getProject:function(e,t){return e.find((e=>e.name==t))},submitTask:function(e){const t=document.querySelector(".task-form"),n=document.querySelector("#input-task-name").value,s=document.querySelector("#input-task-date").value,o=document.querySelector("#input-task-description").value,a=new r(n,s,o);t.reset(),e.addTask(a)},deleteTask:function(e){const t=document.querySelectorAll(".delete-task");Array.from(t).forEach((t=>{t.addEventListener("click",(t=>{e.getTasks().splice(t.target.parentElement.dataset.id,1)}))}))},submitProject:function(e){const t=document.querySelector(".project-form"),r=document.querySelector("#input-project-name").value,s=new n(r);t.reset(),e.push(s)}},o=function(){let e=0;return{renderTasks:function n(r){const s=document.querySelector(".task-view");s.innerHTML="";let o=r.getTasks();const a=document.createElement("h2");a.textContent="Tasks",s.appendChild(a),o.forEach((t=>{const n=document.createElement("div");n.classList.add("task-container"),n.dataset.id=e;const r=document.createElement("div");r.classList.add("show-task-name"),r.textContent=t.name,n.appendChild(r);const o=document.createElement("div");o.classList.add("show-task-date"),o.textContent=t.date,n.appendChild(o);const a=document.createElement("div");o.classList.add("show-task-description"),a.textContent=t.description,n.appendChild(a);const c=document.createElement("button");c.classList.add("delete-task"),c.textContent="Delete",n.appendChild(c),e+=1,s.appendChild(n)})),e=0;const c=document.createElement("button");c.classList.add("new-task"),c.textContent="Create new task",s.appendChild(c),document.querySelectorAll(".delete-task").addEventListener("click",(()=>{t.default.deleteTask(r),n(r)}))},renderProjects:function(e){const t=document.querySelector(".project-nav");t.innerHTML="",e.forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))}}}();!function(){let e=[new n("default")],t="default";document.querySelector(".submit-task").addEventListener("click",(n=>{n.preventDefault(),s.submitTask(s.getProject(e,t)),o.renderTasks(s.getProject(e,t))})),document.querySelector(".submit-project").addEventListener("click",(n=>{n.preventDefault(),s.submitProject(e),o.renderProjects(e);const r=document.querySelectorAll("li");Array.from(r).forEach((n=>{n.addEventListener("click",(n=>{t=n.target.textContent,o.renderTasks(s.getProject(e,t)),console.log(t)}))}))}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNMEIsRUFBYy9DLFNBQVNRLGlCQUFpQixNQUU5Q0MsTUFBTUMsS0FBS3FDLEdBQWFwQyxTQUFTYixJQUNoQ0EsRUFBUWUsaUJBQWlCLFNBQVVDLElBQ2xDK0IsRUFBaUIvQixFQUFFRSxPQUFPZ0IsWUFDMUJSLEVBQVdFLFlBQVlsQyxFQUFVQyxXQUFXNEIsRUFBWXdCLElBQ3hERyxRQUFRQyxJQUFJSixZQU1oQkssSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW11cbiAgICB9XG5cbiAgICBhZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzaylcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSxkYXRlLGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbiAgICBnZXREYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVcbiAgICB9XG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYWluTG9naWMgPSAoZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QoYXJyYXksbmFtZSl7XG4gICAgICAgIHJldHVybiBhcnJheS5maW5kKCBlbGVtID0+IGVsZW0ubmFtZSA9PSBuYW1lKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrKHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1uYW1lXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1kYXRlXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXRhc2stZGVzY3JpcHRpb25cIikudmFsdWVcblxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soaW5wdXROYW1lLGlucHV0RGF0ZSxpbnB1dERlc2NyaXB0aW9uKVxuICAgICAgICB0YXNrRm9ybS5yZXNldCgpXG5cbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3Qpe1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpXG4gICAgICAgIEFycmF5LmZyb20oZGVsZXRlQnV0dG9ucykuZm9yRWFjaCggYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuc3BsaWNlKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCwxKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0KGFsbFByb2plY3RzKXtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKVxuICAgICAgICBjb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC1wcm9qZWN0LW5hbWVcIikudmFsdWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXRQcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKVxuXG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBzdWJtaXRUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBzdWJtaXRQcm9qZWN0XG4gICAgfVxuXG59KSgpIiwiaW1wb3J0IG1haW5Mb2dpYyBmcm9tICcuL2xvZ2ljLmpzJ1xuXG5leHBvcnQgY29uc3QgZG9tTWFuYWdlciA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3XCIpXG4gICAgICAgIHRhc2tWaWV3LmlubmVySFRNTCA9IFwiXCJcblxuICAgICAgICBsZXQgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKClcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrc1wiXG4gICAgICAgIHRhc2tWaWV3LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCB0YXNrID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmRhdGFzZXQuaWQgPSBpbmRleFxuXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRhc2stbmFtZVwiKVxuICAgICAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWVcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInNob3ctdGFzay1kYXRlXCIpXG4gICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZVxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInNob3ctdGFzay1kZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvblxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIilcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAgICAgICBpbmRleCArPSAxXG4gICAgICAgICAgICB0YXNrVmlldy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBpbmRleCA9IDBcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFza1wiKVxuICAgICAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3IHRhc2tcIlxuICAgICAgICB0YXNrVmlldy5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRhc2tcIilcbiAgICAgICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluTG9naWMuZGVsZXRlVGFzayhwcm9qZWN0KVxuICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoYWxsUHJvamVjdHMpe1xuICAgICAgICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hdlwiKVxuXG4gICAgICAgIHByb2plY3RET00uaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG5cbiAgICAgICAgICAgIHByb2plY3RET00uYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJUYXNrcyxcbiAgICAgICAgcmVuZGVyUHJvamVjdHNcbiAgICB9XG5cbn0pKCkiLCJpbXBvcnQgeyBtYWluTG9naWMsUHJvamVjdCB9IGZyb20gJy4vbG9naWMuanMnXG5pbXBvcnQgeyBkb21NYW5hZ2VyIH0gZnJvbSAnLi9kb20uanMnXG5cbmZ1bmN0aW9uIGluaXQoKXtcblx0Y29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImRlZmF1bHRcIilcblx0bGV0IGFsbFByb2plY3RzID0gW2RlZmF1bHRQcm9qZWN0XVxuXHRcblx0bGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJkZWZhdWx0XCJcblx0XG5cdGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10YXNrXCIpXG5cblx0c3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdG1haW5Mb2dpYy5zdWJtaXRUYXNrKG1haW5Mb2dpYy5nZXRQcm9qZWN0KGFsbFByb2plY3RzLGN1cnJlbnRQcm9qZWN0KSlcblx0XHRkb21NYW5hZ2VyLnJlbmRlclRhc2tzKG1haW5Mb2dpYy5nZXRQcm9qZWN0KGFsbFByb2plY3RzLGN1cnJlbnRQcm9qZWN0KSlcblxuXHR9KVxuXG5cdGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1wcm9qZWN0XCIpXG5cdFxuXG5cdHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRtYWluTG9naWMuc3VibWl0UHJvamVjdChhbGxQcm9qZWN0cylcblx0XHRkb21NYW5hZ2VyLnJlbmRlclByb2plY3RzKGFsbFByb2plY3RzKVxuXG5cdFx0Y29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIilcblxuXHRcdEFycmF5LmZyb20ocHJvamVjdExpc3QpLmZvckVhY2goIHByb2plY3QgPT4ge1xuXHRcdFx0cHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0Y3VycmVudFByb2plY3QgPSBlLnRhcmdldC50ZXh0Q29udGVudFxuXHRcdFx0XHRkb21NYW5hZ2VyLnJlbmRlclRhc2tzKG1haW5Mb2dpYy5nZXRQcm9qZWN0KGFsbFByb2plY3RzLGN1cnJlbnRQcm9qZWN0KSlcblx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0pXG59XG5cbmluaXQoKSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGhpcyIsInRhc2tMaXN0IiwiYWRkVGFzayIsInRhc2siLCJwdXNoIiwiZ2V0VGFza3MiLCJUYXNrIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiZ2V0TmFtZSIsImdldERhdGUiLCJnZXREZXNjcmlwdGlvbiIsIm1haW5Mb2dpYyIsImdldFByb2plY3QiLCJhcnJheSIsImZpbmQiLCJlbGVtIiwic3VibWl0VGFzayIsInByb2plY3QiLCJ0YXNrRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0TmFtZSIsImlucHV0RGF0ZSIsImlucHV0RGVzY3JpcHRpb24iLCJyZXNldCIsImRlbGV0ZVRhc2siLCJkZWxldGVCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNwbGljZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwiaWQiLCJzdWJtaXRQcm9qZWN0IiwiYWxsUHJvamVjdHMiLCJwcm9qZWN0Rm9ybSIsImlucHV0UHJvamVjdE5hbWUiLCJkb21NYW5hZ2VyIiwiaW5kZXgiLCJyZW5kZXJUYXNrcyIsInRhc2tWaWV3IiwiaW5uZXJIVE1MIiwidGFza3MiLCJ0YXNrVGl0bGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInRhc2tDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YXNrTmFtZSIsInRhc2tEYXRlIiwidGFza0Rlc2NyaXB0aW9uIiwiZGVsZXRlQnRuIiwidGFza0J1dHRvbiIsInJlbmRlclByb2plY3RzIiwicHJvamVjdERPTSIsImxpIiwiY3VycmVudFByb2plY3QiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RMaXN0IiwiY29uc29sZSIsImxvZyIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9