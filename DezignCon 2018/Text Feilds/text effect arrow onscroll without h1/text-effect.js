$(document).ready(function(){
    $(window).scroll(function(){
        
        $("#text a").animate({
            backgroundPositionX : '-100%'
       }, "slow", function(){
            $("#text i").animate({
                backgroundPositionX : '-100%'
            },1000)
        })
       
    })
})