$(function(){
    //메뉴
    $(".header-r div a").mouseenter(function(){
        $(".sub").stop().slideDown();
    })
    $(".header-r div a").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })

    //tap 메뉴
    $(".tabmenu li").click(function(){
        $(".tabmenu li").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index();
        console.log(i);
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
        return false;
    })

    //슬라이드
    var t = 0;
    function slide(){
        if(t<2){
            t++;
        }
        else{
            t=0;
        }
        $(".main-t ul").animate({top:t*350*(-1)},1000);
    }
    setInterval(slide,2000);
})