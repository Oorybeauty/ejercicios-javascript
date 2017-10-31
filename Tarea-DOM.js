function init(){

	var container = document.querySelector("#container");
	container.classList.add("fancy-container");

	var boton= document.createElement("button")
	textContent ="Hello Academy";
	boton.classList.add("fancy-button")
};
	


	/*
	Toda la lógica va aquí
	*/
}
    boton.addEventListener('click', clickBoton);
	container.addEventListener('click', clickContainer);

	container.appendChild(boton);

window.addEventListener("load", init);