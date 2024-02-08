const menu = document.getElementById("ticket");
const list = document.getElementById("list");
function On(){
    list.classList.remove('dropdown-content-hidden');
    list.classList.add('dropdown-content');
}
function Out(){
    list.classList.add('dropdown-content-hidden');
    list.classList.add('dropdown-content-hidden');
}
menu.addEventListener('onmouseenter',On);
menu.addEventListener('onmouseleave', Out);
 