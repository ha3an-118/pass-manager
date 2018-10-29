$(document).ready(function (){
    $("[tagmodal='modal']").click(function(){
        var temp=$(this).attr("whichmodal");
       $("#"+temp).css("display","block"); 
        });
    $("[closemodal]").click(function(){
           var temp= $(this).attr("closemodal");
            $("#"+temp).css("display","none"); 
        });
    });

