$(document).ready(()=>{
    $(".fa-bars").on("click",()=>{
        $(".menu-items").css("top", "80%")
        $(".fa-bars").css("display", "none")
        $(".fa-xmark").css("display", "block")
    })


    $(".fa-xmark").on("click",()=>{
        $(".menu-items").css("top", "-300%")
        $(".fa-xmark").css("display", "none")
        $(".fa-bars").css("display", "block")
    })

   

    $(window).on("resize", (e)=>{
        if($(window).width() > 1550){
            $(".fa-xmark").css("display", "none")
            $(".fa-bars").css("display", "none")
            return;
        }else{
            $(".fa-xmark").css("display", "none")
            $(".fa-bars").css("display", "block")
        }

    })

   
})
    
