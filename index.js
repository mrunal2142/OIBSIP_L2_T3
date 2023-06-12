let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputT = document.getElementById('inputT');

addToDoButton.addEventListener('click',function(){
	var paragraph = document.createElement('p')
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputT.value;
	ToDoContainer.appendChild(paragraph);
	inputT.value = "";
	
	paragraph.addEventListener('click',function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick',function(){
		ToDoContainer.removeChild(paragraph);
	})
})