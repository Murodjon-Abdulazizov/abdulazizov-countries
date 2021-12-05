const elDarkModebutton = document.querySelector('.site-dark-button');
elDarkModebutton.addEventListener('click', function(){
 var element = document.body;
 element.classList.toggle('dark-mode');
})
