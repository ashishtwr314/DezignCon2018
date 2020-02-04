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
        var $i = 0;
        $(window).scroll(function(){
                 if($i > 0){
                    return false;
                }
                
                if($(".progressbars").visible()){
                    var i=1;
                    
                    if(i == 0){
                        return false;
                    }
                    else{
                        $('.circle').on('circle-animation-progress', function(event, progress, stepValue) {
                            $(this).find('strong').html(String(stepValue.toFixed(2)).substr(2) + "<sup>%</sup>");
                        });
                        
                        $(".progressbars h4").fadeIn();
                        
                        $(".circle-1").circleProgress({
                            startAngle: 4.8,
                            value : 0.93,
                            size: 200,
                            fill: {
                                color: "blue"
                            }
                        });
                        
                        $(".circle-2").circleProgress({
                            startAngle: 4.8,
                            value : 0.91,
                            size: 200,
                            fill: {
                                color: "orange"
                            }
                        });
                         $(".circle-3").circleProgress({
                            startAngle: 4.8,
                            value : 0.76,
                            size: 200,
                            fill: {
                                color: "green"
                            }
                        });
                        $(".circle-4").circleProgress({
                            startAngle: 4.8,
                            value : 0.80,
                            size: 200,
                            fill: {
                                color: "red"
                            }
                        });
                    }
                    
                    $i++;
                      
                }
        
    })   
})
        
        