jQuery (function($) {

  /*---Sliders---*/

  /*---Слайдер наши клиенты---*/

  $('.our-clients__slider').slick ({        
      infinite: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1800,
      arrows: true,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,       
            }
          },

          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,       
            }
          },

          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,       
            }
          }
      ]              
  });



  /*---Слайдер оформление витрин---*/

  $('.showcase__slider').slick ({        
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: '<button class="slick-show-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-show-next" aria-label="Next" type="button">Next</button>',                   
  });


  $('.headerBurger').click(function(e) {
      e.preventDefault(); 
      
      $('.header-menu').addClass('header-menu_open');
      });
    
      $('.headerNavClose').click(function(e) {
      e.preventDefault(); 
        
      $('.header-menu').removeClass('header-menu_open');
      });
    
      $('.bottom-bar__link').click(function(e) {
              
      $('.header-menu').removeClass('header-menu_open');
  });

  
  /*---Popups---*/

  $('.ask-a-question').click(function(e) {
  e.preventDefault();  
  
  $('.ContactFormPopup').addClass('ContactFormPopup_open');
  });

  $('.ContactFormClose').click(function(e) {
  e.preventDefault(); 
    
  $('.ContactFormPopup').removeClass('ContactFormPopup_open');
  });


  /*---Заказать звонок---*/

  $('.header-contacts__button').click(function(e) {
  e.preventDefault();  
  
  $('.FormPopup-call').addClass('FormPopup-call_open');
  });

  $('.ContactFormClose').click(function(e) {
  e.preventDefault(); 
    
  $('.FormPopup-call').removeClass('FormPopup-call_open');
  });


  /*---Увеличить продажи---*/

  $('.to-sales').click(function(e) {
  e.preventDefault();  
  
  $('.FormPopup-sales').addClass('FormPopup-sales_open');

    $('.Popup-sales__button1').click(function(e) {
      e.preventDefault();  
      
      $('.ContactFormPopup').addClass('ContactFormPopup_open');

      $('.FormPopup-sales').removeClass('FormPopup-sales_open');
    });

  });

  $('.ContactFormClose').click(function(e) {
  e.preventDefault(); 
    
  $('.FormPopup-sales').removeClass('FormPopup-sales_open');
  });


  $(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $(".exitblock").fadeIn("fast");

        $('.Popup-sales__button1').click(function(e) {
          e.preventDefault();  
          
          $('.ContactFormPopup').addClass('ContactFormPopup_open');
    
         
        });

        $('.Popup-sales__button2').click(function(e) {
          e.preventDefault();
          
          $(".exitblock").remove(); 
        });  
    }    
  });
  $(document).click(function(e) {
      if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
          $(".exitblock").remove();
      } 
  });  


});

/*---Контактная форма Обратная связь---*/


jQuery(document).ready(function($) {	
  $('#FormPopupConnect').submit(function() {
    var formData = new FormData();		
    var userName = $('#FormPopupConnect input[name="first_name"]').val();
    var userPhone = $('#FormPopupConnect input[name="phone"]').val();
    var email = $('#FormPopupConnect input[name="email"]').val();
    
   
    
    formData.append('first_name', userName);
    formData.append('phone', userPhone);
       
    formData.append('email', email);

    console.log(formData);		  

    $.ajax({
    url: "http://u0618804.plsk.regruhosting.ru/mailing.php",
    type: "POST",
    dataType : "json", 
    cache: false,
    contentType: false,
    processData: false,  
    data: formData, //указываем что отправляем		
    success: function(msg) {
      if(msg == 'Message has been sent') {
      result = '<div class="ok-form"><h2 class="ContactFormHeading">Спасибо!<br /><h3 class="ContactFormHeading2">наш специалист свяжется с Вами</h3><br /><button class="button-ok" type="submit">OK</button></div>';
      
      
      }
      
      else {result = msg;}
      $('.noteConnect .note').html(result);
      $('.noteConnect .note').show();

      $("#FormPopupConnect").find('input').each(function() {
        $(this).val('');
      });   
      
      setTimeout(function() {
        $('.ContactFormPopup .note').hide();
        $('.ContactFormPopup').removeClass('ContactFormPopup_open');
      }, 3000); 
      
      $('.button-ok').click (function(){
        $('.ContactFormPopup .note').hide();
        $('.ContactFormPopup').removeClass('ContactFormPopup_open');
        
      });
      
    }

    
    });	 
    
    return false;    

  });
});


/*---Контактная форма Заказать звонок---*/


jQuery(document).ready(function($) {	
  $('#PopupCall').submit(function() {
    var formData = new FormData();		
    var userName = $('#PopupCall input[name="first_name"]').val();
    var userPhone = $('#PopupCall input[name="phone"]').val();
      
   
    
    formData.append('first_name', userName);
    formData.append('phone', userPhone);      
  

    console.log(formData);		  

    $.ajax({
    url: "http://u0618804.plsk.regruhosting.ru/mailing.php",
    type: "POST",
    dataType : "json", 
    cache: false,
    contentType: false,
    processData: false,  
    data: formData, //указываем что отправляем		
    success: function(msg) {
      if(msg == 'Message has been sent') {
      result = '<div class="ok-form-call"><h2 class="ContactFormHeading">Спасибо!<br /><h3 class="ContactFormHeading2">наш специалист свяжется с Вами</h3><br /><button class="button-ok" type="submit">OK</button></div>';
      
      
      }
      
      else {result = msg;}
      $('.note-call').html(result);
      $('.note-call').show();

      $("#PopupCall").find('input').each(function() {
        $(this).val('');
      });   
      
      setTimeout(function() {
        $('.FormPopup-call .note-call').hide();
        $('.FormPopup-call').removeClass('FormPopup-call_open');
      }, 3000); 
      
      $('.button-ok').click (function(){
        $('.FormPopup-call .note-call').hide();
        $('.FormPopup-call').removeClass('FormPopup-call_open');
      });
      
    }

    
    });	 
    
    return false;    

  });
});
