$(document).ready(function(){

    //Start totop section
    $(".btn-backtotops").hide();

    $(window).scroll(function(){
        let getscrolltop=$(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop>=400){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })
    //End totop section
    
    // Start Header 
        
        // Start Nav 

            //for burgar
            $(".navbuttons").click(function(){
                $(this).toggleClass("crossxs")
            })
             //for nav
             $(window).scroll(function(){

                let getscrolltop=$(this).scrollTop();
                console.log(getscrolltop);

                if(getscrolltop>=200){
                    $(".navbar").addClass("navmenus");
                }else{
                    $(".navbar").removeClass("navmenus");
                }

             });
        // End Nav 

    // End Header


    //Start Properties
    $(".propertylists").click(function(){
      

        $(this).addClass('activeitems').siblings().removeClass('activeitems');
    

        //for filter
        let getattvalue=$(this).attr("data-filter");
        //console.log(getattvalue);

        if(getattvalue === "all"){

            $(".filters").show("slide",500);

        }else{
            $(".filters").hide();
            $(".filters").not("."+getattvalue).hide("slide",500);
            $(".filters").filter("."+getattvalue).show("slide",500);
    
        }
        
        // else if(getattvalue === "new"){

        //     $(".filters").not("."+getattvalue).hide("slide",500);
        //     $(".filters").filter("."+getattvalue).show("slide",500);

        // }else if(getattvalue === "free"){

        //     $(".filters").not("."+getattvalue).hide("slide",500);
        //     $(".filters").filter("."+getattvalue).show("slide",500);

        // }else if(getattvalue === "furniture"){

        //     $(".filters").not("."+getattvalue).hide("slide",500);
        //     $(".filters").filter("."+getattvalue).show("slide",500);

        // }else if(getattvalue === "office"){

        //     $(".filters").not("."+getattvalue).hide("slide",500);
        //     $(".filters").filter("."+getattvalue).show("slide",500);

        // }

        lightbox.option({
            showImageNumberLabel:false
        });
    
    });
    //End Properties

    //Start Adv section
    $(window).scroll(function(){
        
        let getscrolltop=$(this).scrollTop();
        // console.log( getscrolltop);
        if(getscrolltop>=900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    })
    //End Adv section

    //Start Footer section
    const getyear=$("#getyear");

    const grtfullyear= new Date().getUTCFullYear();
    getyear.text(grtfullyear);
    //End Footer section
});


