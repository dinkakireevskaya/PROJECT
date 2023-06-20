function SubForm (){
	$.ajax({
		url:"https://api.apispreadsheets.com/data/JF6SS3DwqX7aM8wo/",
		type:"post",
		data:$("#myForm").serializeArray(),
		success: function(){
			alert("Форма успешно заполнена :)")
		},
		error: function(){
			alert("Ошибка отправки :(")
		}
	});
}

window.onkeyup = okno; // нажатие Esc, см. условие "e.keyCode==27" 
document.getElementById('popup').onclick = okno;

function okno(e) {
  if (e.target.nodeName == 'BUTTON' || e.keyCode==27) { //
    document.getElementById('popup').style.display='none';
    localStorage.setItem('popup1', 'none');
  }
}
// Не кликабельность кнопки при условии незаполненных форм
document.getElementsByTagName('input')[0].onchange = checkIt;
document.getElementsByTagName('input')[1].onchange = checkIt;
function checkIt(){
    if (document.getElementsByTagName('input')[0].value!=''&& document.getElementsByTagName('input')[1].value!=''){
        document.getElementById('buttonT').disabled = false;
 }
}	


