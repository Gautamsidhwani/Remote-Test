const button = document.querySelector('button');
button.addEventListener('click',()=>{
const h2 = document.createElement('h2');
	h2.textContent = "This is me hello!";
	const body = document.body;
	body.append(h2);
})
