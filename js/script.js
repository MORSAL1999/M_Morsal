const Menu = document.getElementById("Menu");
const action = document.getElementById("actions");


Menu.addEventListener('click', () => {
    HundleMenu();
});

function HundleMenu() {
    Menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}
