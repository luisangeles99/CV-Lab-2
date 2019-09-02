//Añadir event a los checkbox existentes
var checkboxes=document.getElementsByName('todo');
for(var i=0; i<checkboxes.length;i++){
	checkboxes[i].addEventListener('click', check, false);
}


//Añadir li
let input1=document.getElementById('newitem');

input1.addEventListener('keyup', function (event){
	if(event.keyCode===13){
		if (input1.value!="") {
			var ul=document.getElementById('list');
			var li=document.createElement('li');
			var input=document.createElement('input');
				input.type="checkbox";
				input.value=1;
				input.name="todo";
				input.addEventListener('click', check,false)
			li.appendChild(input);
			var txt=document.createTextNode(input1.value);
			var span=document.createElement('span');
			span.appendChild(txt);
			li.appendChild(span);
			ul.appendChild(li);
		}
		else
		{
			alert("No content in input");
		}
		document.getElementById('newitem').value="";
	};
});

//Checked element
function check(){
	var total=document.getElementsByName('todo');
	var spans=document.getElementsByTagName('span');
	var li=document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		if (total[i].type=='checkbox') {
			if(total[i].checked==true && li[i].classList.contains('ldone')==false){
				spans[i].classList.add('done');
				li[i].classList.add('ldone');
				move(li[i]);
			}
			else if (li[i].classList.contains('ldone') && total[i].checked==false){
				spans[i].classList.remove('done');
				moveBack(li[i]);
			}
		}
	}
}

//Desplazar elemento a la parte de done
function move(li){
	document.getElementById('list-done').insertAdjacentElement('beforeEnd', li);
}

//Desplazar elemento a la parte de to do
function moveBack(li){
	li.classList.remove('ldone');
	document.getElementById('list').insertAdjacentElement('beforeEnd', li);

}



