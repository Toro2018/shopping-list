var button = document.getElementById("enter");
var input = document.getElementById("userinput");

button.addEventListener("click", addListAfterInput);
input.addEventListener("keypress", addListAfterInput);

var list = document.querySelectorAll("ul li");
	for( let li of list) { 
		addClickToggle(li);
}

var buttonList = document.querySelectorAll("ul button");
	for( let button of buttonList ) {
	 addClickRemove(button);
}

function addListAfterInput(event) {
	if ( !input.value.length) return;
	if(event.type === "keypress" && event.keyCode !== 13) return;

	var li = document.createElement("li");
	addClickToggle(li);

	var deleteButton = document.createElement('Button');
	addClickRemove(deleteButton);

	deleteButton.appendChild(document.createTextNode("delete")); 
	li.appendChild(document.createTextNode(input.value));

	li.appendChild(deleteButton);

	var ul = document.querySelector("ul");
	ul.appendChild(li);
	
	input.value = '';
}

function addClickToggle(ele) {
	ele.addEventListener('click', (event) => {
		event.target.classList.toggle("done");
	});
}

function addClickRemove(ele) {
	ele.addEventListener('click', (event) => {
		event.target.parentNode.remove();;
	});
}











