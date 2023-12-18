let name = prompt('как вас зовут?');
let years = prompt('Сколько вам лет?', 100);
alert('Вам ' + years + ' лет!')
alert('Ваше имя: ' + name)

var isAdmin = confirm("Вы - хотите посетить этот сайт?");
if (isAdmin)
{
    alert("ну хорошо заходи");
}
else
{
    alert("ну и зачем заходил?");

    window.close()
}