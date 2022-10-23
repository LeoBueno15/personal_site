$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("top");
        } else{
            $('.navbar').removeClass("top");
        }
    });
    
    
})