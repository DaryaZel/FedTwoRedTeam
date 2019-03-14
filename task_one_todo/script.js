'use strict'

document.querySelector('.addEl').onclick = addBuisness;
document.querySelector('.remEl').onclick = remAll;

function addBuisness(){
	let newBusiness = document.querySelector('.newBusiness').value;
	let newLi = document.createElement('li');
	let newInput = document.createElement('input');	
	newInput.type = 'checkbox';
	let newLabel = document.createElement('label');
	newLabel.innerHTML = newBusiness;
	newLi.appendChild(newInput);
	newLi.appendChild(newLabel);		
document.querySelector('.list').appendChild(newLi);
};
list.addEventListener('click', (el) =>{
    if(el.target.tagName ==="LABEL") {
       el.target.classList.toggle('lineThrough');
    } 
}, false);

function remAll(){
	let rem = document.querySelector('.list');
	rem.innerHTML = '';
};