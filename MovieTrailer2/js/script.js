$(document).ready(function(){

    $('.menu').click(function(e){
        e.stopPropagation();
        $('#main_nav').toggleClass('active');
    });

    $(document).click(function(e){
        $('#main_nav').removeClass('active');
    });

});