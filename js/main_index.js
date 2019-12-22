$("document").ready(function(){
    $("#klm1").hover(function(){
        $("#j1s111").show();
        $("#klm1").css("opacity", 0.5);
    },function(){
            $("#j1s111").hide();
            $("#klm1").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss1").hover(function(){
        $("#j1s11").show();
        $("#imgjss1").css("opacity", 0.5);
    },function(){
            $("#j1s11").hide();
            $("#imgjss1").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss2").hover(function(){
        $("#j1s22").show();
        $("#imgjss2").css("opacity", 0.5);
    },function(){
            $("#j1s22").hide();
            $("#imgjss2").css("opacity",1);
    })
})
$(document).ready(function(){
    $("#j1s111").click(function(){
        $("#tb1").toggle();
    });
    });
    var modal = document.getElementById("myModal");
    var btn = document.getElementById(".myBtn");

var span = document.getElementsByClassName("close")[0];
    
    
    $(".myBtn").click(function(){
        modal.style.display = "block";
    }); 
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    