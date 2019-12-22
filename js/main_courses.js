function italictext(){
   var getitalic=document.getElementById("txt");
    if(getitalic.style.fontStyle=="italic"){
        getitalic.style.fontStyle="normal"; 
    }
    else{
        getitalic.style.fontStyle="italic";
    } 
}
function boldtext(){
    var getbold=document.getElementById("txt");
    if(getbold.style.fontWeight=="bolder"){
        getbold.style.fontWeight="normal";
    }
    else{
        getbold.style.fontWeight="bolder";
    }
}
function undertext(){
    var getunder=document.getElementById("txt");
    if(
        getunder.style.textDecoration=="underline"){
           getunder.style.textDecoration="none"; 
        }
    else{
        getunder.style.textDecoration="underline"
    }    
}

function changesize2(){
    var changesize1=document.getElementById("91");
    var getsize=document.getElementById("txt");
    getsize.style.fontSize=changesize1.value;
}
function changefamil2(){
    var changefamil1=document.getElementById("y90");
    var getfamil=document.getElementById("txt");
    getfamil.style.fontFamily=changefamil1.value;
}

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






$("document").ready(function(){
    $("#klm2").hover(function(){
        $("#j1s333").show();
        $("#klm2").css("opacity", 0.5);
    },function(){
            $("#j1s333").hide();
            $("#klm2").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss3").hover(function(){
        $("#j1s33").show();
        $("#imgjss3").css("opacity", 0.5);
    },function(){
            $("#j1s33").hide();
            $("#imgjss3").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss4").hover(function(){
        $("#j1s44").show();
        $("#imgjss4").css("opacity", 0.5);
    },function(){
            $("#j1s44").hide();
            $("#imgjss4").css("opacity",1);
    })
})






$("document").ready(function(){
    $("#klm3").hover(function(){
        $("#j1s555").show();
        $("#klm3").css("opacity", 0.5);
    },function(){
            $("#j1s555").hide();
            $("#klm3").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss5").hover(function(){
        $("#j1s55").show();
        $("#imgjss5").css("opacity", 0.5);
    },function(){
            $("#j1s55").hide();
            $("#imgjss5").css("opacity",1);
    })
})
$("document").ready(function(){
    $("#imgjss6").hover(function(){
        $("#j1s66").show();
        $("#imgjss6").css("opacity", 0.5);
    },function(){
            $("#j1s66").hide();
            $("#imgjss6").css("opacity",1);
    })
})

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
