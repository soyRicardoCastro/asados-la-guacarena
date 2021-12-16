const navToggle = document.querySelector(".nav-toggle");

const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");
	if(navMenu.classList.contains("nav-menu_visible")) {
		navToggle.setAttribute("aria-label","Cerrar menú");
	} else {
		navToggle.setAttribute("aria-label", "Abrir menú")
	}
})


const navRotate = document.getElementById('nav-rotate');

navRotate.addEventListener("click",()=>{
	if (navRotate.classList.contains("nav-toggle_activo")) {
		navRotate.classList.remove("nav-toggle_activo");
	} else{
		navRotate.classList.add("nav-toggle_activo");
	}
})