var search = document.getElementById("search");
var box= document.getElementById("s-box");

function SearchPage(){
    search.style.height= "770px";
    search.style.display= "block";
    box.style.margin = " 10rem auto 10rem auto";
    box.style.opacity= "1";

}


function ExitSearch(){
search.style.display = "none";
box.style.margin = " 5rem auto 10rem auto";
box.style.opacity= "0";
}

$(document).ready(function(){
$("#barsmenu").click(function(){
    $("#phoneheader").css("display","none");
    $("#sidemenu").css("width","100%");
    $("#sidemenu").fadeIn(400);
    $(".a-b").css("opacity", "1");
});

$("#exitmenu").click(function(){
    $("#sidemenu").css("display","none");
    $("#phoneheader").css("display","block");
    $(".a-b").css("opacity", "0") ;
});
});


$(document).ready(function(){
    $('.your-class').slick({

        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]



    });
  });
