function add() {
	//almacenando valor
	var comments = document.getElementById("comment").value; //se guardara el valor del comentario
	document.getElementById("comment").value = "";  // limpiara el valor la caja del comentario
	var newComments = document.createElement('div');  // crea el div donde ira el comentario
	var cont = document.getElementById('cont'); // rescata el valor del ID al div

	var check = document.createElement('input'); //crea input para check
	check.type = 'checkbox'; // tipo de input checkbox

	var paragraph = document.createElement('p'); //crea un parrafo
	paragraph.classList.add('color'); // crea una clase para el parrafo anterior
	var nodoText = document.createTextNode(comments); // se crea el texto que ira en parrafo y se le pasa el valor de la variable comments
	paragraph.appendChild(nodoText); //ingresa el valor de comment a p

	var heart = document.createElement('i'); // crea el icono
	heart.classList.add('fa', 'fa-heart', 'heart');    //le crea clase al elemento corazon

	var trash = document.createElement('i'); //crea el icono
	trash.classList.add('fa', 'fa-trash', 'trash');   //le crea clase al elemento basurero

	//añade todos lo que deben ir dentro de newComments
	newComments.appendChild(check);
	newComments.appendChild(paragraph);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	cont.appendChild(newComments); // añade a newComments en cont

	check.addEventListener('click', function(){  //hace algo cuando se haga click
		paragraph.classList.toggle('strike-out');  //toggle cambiara el color
	})

	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})

	heart.addEventListener('click', function(){
		heart.classList.toggle('red');


	})
}
