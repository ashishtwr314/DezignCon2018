/*function progress1(){
    
    $(".progress-bar-1").animate({
        width: "93%"
    }, "slow")
    setInterval(function(){
        $per1w = Math.ceil((($(".progress-bar-1").width())/300)*100);
        if($per1w >= 25){
            progress2();
        }
        $(".progress-bar-1").parent().siblings(".percentage").text($per1w+"%");
    }, 0.001)
}*/

$(document).ready(function(){
            
    
            $progressbar1 = $(".progress-bar-1");
            $progressbar2 = $(".progress-bar-2");
            $progressbar3 = $(".progress-bar-3");
            $progressbar4 = $(".progress-bar-4");

            $percentageCounter1 = $(".percentage-1");
            $percentageCounter2 = $(".percentage-2");
            $percentageCounter3 = $(".percentage-3");
            $percentageCounter4 = $(".percentage-4");

            $upto_1 = $.trim($(".percentage-1").html());
            $upto_2 = $.trim($(".percentage-2").html());
            $upto_3 = $.trim($(".percentage-3").html());
            $upto_4 = $.trim($(".percentage-4").html());

            $duration = 5000;

            function animateBars(){
                $progressbar1.animate({
                    width: $upto_1+"%"
                },$duration, "easeOutQuart"); 

               $progressbar2.delay(500).animate({
                    width: $upto_2+"%"
                },$duration, "easeOutQuart");
               $progressbar3.delay(1500).animate({
                    width: $upto_3+"%"
                },$duration, "easeOutQuart");
                $progressbar4.delay(2000).animate({
                    width: $upto_4+"%"
                },$duration, "easeOutQuart");

            }

            function count($percentageCounter, $upto){
                $percentageCounter.css({
                    "visibility": "visible"
                })
                $({counter: 1}).animate({
                    counter: $upto
                },{
                    duration:5000 ,
                    step: function(){
                        $percentageCounter.text(Math.ceil(this.counter)+"%");
                    }
                }, "easeOutQuart")
            }
            var $i = 0;

            $(window).scroll(function(){
                
                if($i > 0){
                    return false;
                }
                
               /* console.log($(".progressbars").visible())*/
                console.log($(window).scrollTop());

                if($(window).scrollTop() >= 248){
                    
                    console.log("248");
                    animateBars();


                    count($percentageCounter1, $upto_1);

                    setTimeout(function(){
                        count($percentageCounter2, $upto_2);
                    }, 500);

                    setTimeout(function(){
                        count($percentageCounter3, $upto_3);
                    }, 1500)

                    setTimeout(function(){
                        count($percentageCounter4, $upto_4);
                    }, 2000)
                    
                    $i++;
    
                }
        
    })   
})
        
        