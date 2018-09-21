//to-do variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var removeBtn = document.createElement("button");
	var removeIcon = document.createElement("i")
	li.appendChild(document.createTextNode(input.value));
	li.className = "element";
	ul.appendChild(li);
	input.value = "";
	//creates Remove button
	removeBtn.className = "closed";
	li.appendChild(removeBtn);
	//creates Icon Remove
	removeIcon.classList.add("far", "fa-trash-alt");
	removeBtn.appendChild(removeIcon)
}

//remove item when click
function remove() {
	var close = document.getElementsByClassName("closed");
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//LI Object, change class done
function changeDone(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	}
}

ul.addEventListener("click", remove);

ul.addEventListener("click", changeDone);	

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);