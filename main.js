$(window).on('scroll', function () {

    const scrollValue = $(window).scrollTop() + 150;
    const positionDetails = $("#details").offset().top;
    const positionStrengths = $("#strengths").offset().top;
    const positionAbout = $("#about").offset().top;
    const positionContact = $("#contact").offset().top; 


    const detailsH = $(document).find('.offer_text h1'); 
    const detailsP = $(document).find('.offer_text p');
    const detailsImg = $(document).find('.offer_image img');
    const strItem = $(document).find('.strength-item');
    const inputsContact = $(document).find('.inputt');

    // CHANGING ACTIVE ITEMS IN MENU

    if(scrollValue < positionDetails)
    {
        $(".main_options ol li a").not('.main_options ol .nav-item:nth-child(1) a').removeClass("active");
        $(".main_options ol .nav-item:nth-child(1) a").addClass("active");
    }
    else if(scrollValue < positionStrengths)
    {
        $(".main_options ol li a").not('.main_options ol .nav-item:nth-child(2) a').removeClass("active");
        $(".main_options ol .nav-item:nth-child(2) a").addClass("active");
    }
    else if(scrollValue < positionAbout)
    {
        $(".main_options ol li a").not('.main_options ol .nav-item:nth-child(3) a').removeClass("active");
        $(".main_options ol .nav-item:nth-child(3) a").addClass("active");
    }
    else if(scrollValue < positionContact)
    {
        $(".main_options ol li a").not('.main_options ol .nav-item:nth-child(4) a').removeClass("active");
        $(".main_options ol .nav-item:nth-child(4) a").addClass("active");
    }
    else
    {
        $(".main_options ol li a").not('.main_options ol .nav-item:nth-child(6) a').removeClass("active");
        $(".main_options ol .nav-item:nth-child(6) a").addClass("active");
    }
        
    
    
    // STICKY MENU 
    if ($(window).scrollTop() > 100) 
        $('.top_bar').addClass('menu_sticky');
    else 
        $('.top_bar').removeClass('menu_sticky');




    
    // SOME ANIMATION
    if(scrollValue+200 > positionDetails)
    {
        detailsH.eq(0).removeClass("opac0")
        detailsH.eq(0).addClass("animate__fadeIn")

        detailsP.eq(0).removeClass("opac0")
        detailsP.eq(0).addClass("animate__slideInUp")

        detailsImg.eq(0).removeClass("opac0")
        detailsImg.eq(0).addClass("animate__zoomIn")

        setTimeout(() => {
            $(".offer_text ul li:first-child").removeClass("opac0")
            $(".offer_text ul li:first-child").addClass("animate__fadeInLeft")
        }, 0300);

        setTimeout(() => {
            $(".offer_text ul li:nth-child(2)").removeClass("opac0")
            $(".offer_text ul li:nth-child(2)").addClass("animate__fadeInLeft")
        }, 0400);

        setTimeout(() => {
            $(".offer_text ul li:nth-child(3)").removeClass("opac0")
            $(".offer_text ul li:nth-child(3)").addClass("animate__fadeInLeft")
        }, 0500);

        setTimeout(() => {
            $(".offer_text ul li:nth-child(4)").removeClass("opac0")
            $(".offer_text ul li:nth-child(4)").addClass("animate__fadeInLeft")
        }, 0600);      

    }

    if(scrollValue-350 > positionDetails)
    {
        detailsH.eq(1).removeClass("opac0")
        detailsH.eq(1).addClass("animate__fadeIn")


        detailsP.eq(1).removeClass("opac0")
        detailsP.eq(1).addClass("animate__slideInRight")

        detailsImg.eq(1).removeClass("opac0")
        detailsImg.eq(1).addClass("animate__rotateInUpRight")

        $(document).find('.offer_text').eq(1).removeClass("opac0")
        $(document).find('.offer_text').eq(1).addClass("animate__fadeInRight")

    }

    if(scrollValue-950 > positionDetails)
    {
        detailsH.eq(2).removeClass("opac0")
        detailsH.eq(2).addClass("animate__fadeIn")


        detailsP.eq(2).removeClass("opac0")
        detailsP.eq(2).addClass("animate__slideInRight")

        detailsImg.eq(2).removeClass("opac0")
        detailsImg.eq(2).addClass("animate__rotateInUpRight")


        $("#second_list").removeClass("opac0")
        $("#second_list").addClass("animate__zoomIn")
    }
    
    if(scrollValue+100 > positionStrengths)
    {
        strItem.eq(0).removeClass("opac0")
        strItem.eq(0).addClass("animate__fadeInLeft")

        strItem.eq(1).removeClass("opac0")
        strItem.eq(1).addClass("animate__fadeInRight")

        strItem.eq(2).removeClass("opac0")
        strItem.eq(2).addClass("animate__fadeInUp")
    }

    if(scrollValue+200 > positionAbout)
    {
        $(".about_desc").removeClass("opac0")
        $(".about_desc").addClass("animate__rollIn");

        $(".about_desc h1").removeClass("opac0")
        $(".about_desc h1").addClass("animate__fadeIn")

        $(".about_desc p").removeClass("opac0")
        $(".about_desc p").addClass("animate__backInUp")

        $(".about_desc ul").removeClass("opac0")
        $(".about_desc ul").addClass("animate__lightSpeedInLeft")

        $(".about_img img").removeClass("opac0")
        $(".about_img img").addClass("animate__fadeInBottomRight")
   }

   if(scrollValue+100 > positionContact)
   {
        inputsContact.eq(0).removeClass("opac0");
        inputsContact.eq(0).addClass("animate__fadeInUp")

        setTimeout(() => {
            inputsContact.eq(1).removeClass("opac0");
            inputsContact.eq(1).addClass("animate__fadeInUp")
        }, 0300);
       
        setTimeout(() => {
            $(".contact_form input[type='submit']").removeClass("opac0");
            $(".contact_form input[type='submit']").addClass("animate__fadeInUp")
        }, 0600);
   }


});


$(document).ready(function() {

        // FADEIN IN HEADER

        $(".main_name").animate({
            marginTop: "0px",
            opacity: "1"
        })

        $(".main_description p").fadeOut(1);
        $(".main_description p").fadeIn(1000);


        // for the library "animate.css" to work
        $(document).find('.offer_text').eq(1).addClass("opac0 animate__animated")
        $(".offer_text h1").addClass("opac0 animate__animated")
        $(".offer_text p").addClass("opac0 animate__animated")
        $(".offer_image img").addClass("opac0 animate__animated")
        $(".offer_text ul li").addClass("opac0 animate__animated")
        $("#second_list").addClass("opac0 animate__animated")

        $(".strength-item").addClass("opac0 animate__animated")

        $(".about_desc").addClass("opac0 animate__animated")
        $(".about_desc h1").addClass("opac0 animate__animated")
        $(".about_desc p").addClass("opac0 animate__animated")
        $(".about_desc ul").addClass("opac0 animate__animated")
        $(".about_img img").addClass("opac0 animate__animated")

        $(".inputt").addClass("opac0 animate__animated")
        $(".contact_form input[type='submit']").addClass("opac0 animate__animated")
        
});



// OPEN MENU IN MOBILE
$(".open_main_menu").click(function(){

    if($(".main_options").hasClass("main_options open"))
        $(".main_options").removeClass("open");
    else
        $(".main_options").addClass("open");

})
	


// SLIDER IN STRENGTHS
$('.slide_container').slick({
        prevArrow: '<div class="previous-slide"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="next-slide"><i class="fa fa-angle-right"></i></div>',
        autoplay: true,
        autoplaySpeed: 5000
});



// LABEL TOP 0 IF SOMETGING IN INPUT
$("#user_name").keyup(function() {
    if(!$("#user_name").val())
        $("#ph_name").removeClass("no_clear");
    else 
        $("#ph_name").addClass("no_clear");
});

$("#user_mail").keyup(function() {
    if(!$("#user_mail").val())
        $("#ph_mail").removeClass("no_clear");
    else 
        $("#ph_mail").addClass("no_clear");
});


