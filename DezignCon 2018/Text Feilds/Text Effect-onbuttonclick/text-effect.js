$(window).ready(function(){
    $("#button").click(function(){
        console.log("red");
       $("#text").animate({
            backgroundPositionX : '600px'
       }, "slow")
    })
})