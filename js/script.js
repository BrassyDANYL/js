 function hideCoupon(){
    document.getElementById("coupon").classList.toggle("hide");
 }
 (function ($) {
      $(window).load(function () {
         if (!$.cookie('was')) {
         } else{
            document.getElementById("balloon__img").classList.toggle("hide");
         }
         $.cookie('was', true, {
            expires: 30,
            path: '/'
         });
      });
   })(jQuery);

function boomBalloon() {
   document.getElementById("balloon").classList.toggle("boom");
   document.getElementById("coupon").classList.toggle("show");
   setTimeout(() => {
      console.log('Async Code');
   }, 2300);
   document.getElementById("coupon").classList.toggle("bottom");
}
const progress = document.querySelector('.paw');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
   let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
   let per = windowScroll / windowHeight * 90;

   progress.style.top = per + '%';
}

var scrollPos = 0;
$(window).scroll(function () {
   var st = $(this).scrollTop();
   if (st > scrollPos) {
      document.getElementById('paw').style.transform = 'rotate(180deg)';
   } else {
      document.getElementById('paw').style.transform = 'rotate(0deg)';
      }
   scrollPos = st;
});


$(document).ready(function () {
   $(".button").click(function () {
      var value = $(this).attr("data-filter");
      var elem = $(".content");
      if (value == "all") {
         $(elem).show("500");
      }
      else {
         $(elem).not("." + value).hide("500");
         $(elem).filter("." + value).show("500");
      }
   });
})

