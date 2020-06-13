const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 300;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}
$(document).ready(function(){  //se hace para que el codigo cargue hasta que haya finalizado cargar la pagina
    $(window).scroll(function(){//detecta cuando el usuario mueve el scroll
        var barra = $(window).scrollTop(); //posicion del scroll
        var posicion = barra * 0.10; //el movimiento que va a tener el fondo
        $('body').css({
            'background-position': '0 -' + posicion + 'px'//cuando queremos modificar el B-P cuando hagamos scroll. El 0 seria el valor de izq y der, el - seria para que vaya de arriba para abajo
            //background-position: 0 -100px; es lo mismo que escribimos arriba
            // el 0 - (el menos lo que hace es que vaya de abajo hacia arriba, si lo quitamos va ir de arriba para abajo)
        });
    });   
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();

	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });

  window.sr = ScrollReveal();
  
  
  sr.reveal('.texto-secundario', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});
sr.reveal('p', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
});
sr.reveal('.btn', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
});
  sr.reveal('.img-left', {
	  duration: 2000,
	  origin: 'top',
	  distance: '300px'
  });
  sr.reveal('.img-right', {
	  duration: 2000,
	  origin: 'top',
	  distance: '300px'
  });
  sr.reveal('#productos', {
	  duration: 2000,
	  origin: 'left',
	  distance: '300px'
  });
  sr.reveal('.img-fluid', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});
  sr.reveal('#contacto', {
	  duration: 2000,
	  origin: 'top',
	  distance: '300px'
  });
  sr.reveal('.titulo-contacto', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});
  sr.reveal('footer', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});