window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar')
  console.log(window.pageYOffset)

  if(window.pageYOffset >= 100) {
    navbar.classList.add ('sticky')
  } else {
    navbar.classList.add ('sticky')
  }
});