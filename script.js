const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.transition = 'width 1s ease-in-out';
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});


$(document).ready(function () {

    var $grid = $('.gallery').isotope({
        itemSelector: '.image',
        layoutMode: 'fitRows'
    });


    $('.filter-button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });
});

  
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(accordion => {
      accordion.addEventListener('click', function(event) {
        const header = event.target.closest('.accordion-header');
        if (!header) return;
  
        const item = header.parentNode;
        const isActive = item.classList.contains('active');
  
        const activeItem = accordion.querySelector('.accordion-item.active');
        if (activeItem && activeItem !== item) {
          activeItem.classList.remove('active');
        }
  
        item.classList.toggle('active', !isActive);
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      setTimeout(function() {
        
        successMessage.style.display = 'block';
    
        contactForm.reset();
        
        setTimeout(function() {
          successMessage.style.display = 'none';
        }, 5000);
      }, 1000); 
    });
  });
  
  



  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
     
      setTimeout(function() {
        
        successMessage.style.display = 'block';
        setTimeout(function() {
          successMessage.style.opacity = '1';
        }, 100);
        
        contactForm.reset();
        
        setTimeout(function() {
          successMessage.style.opacity = '0';
          setTimeout(function() {
            successMessage.style.display = 'none';
          }, 300);
        }, 5000);
      }, 1000); 
    });
  });



  function openCity(cityName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
   
    document.getElementById(cityName).style.display = "block";
  
    
    elmnt.style.backgroundColor = color;
  }
  
  
  document.getElementById("defaultOpen").click();
  




