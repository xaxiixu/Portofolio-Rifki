window.addEventListener('scroll', function() {
    var element = document.querySelector('#hero');
    var position = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (position < screenHeight) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  });

  