$(document).ready(function(){
    $(window).scroll(function(){
        
        if($("#text").visible()){
           $("#text").animate({
                backgroundPositionX : '600px'
           }, "slow");
        }
    })
})