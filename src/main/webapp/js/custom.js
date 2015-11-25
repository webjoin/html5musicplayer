/**
 * Created by eason on 2015/10/1.
 */
$(document).ready(function(){
    $(".play-power span").click(function(){
        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).addClass("off");
            $(this).siblings("p").text("已关闭");
        }else{
            $(this).removeClass("off");
            $(this).addClass("on");
            $(this).siblings("p").text("已打开");
        }
    });
    $(".addVulume").click(function(){
        $(this).addClass("hover1");
        setTimeout(function (){
            //something you want delayed
            $(".addVulume").removeClass("hover1");
        }, 300);

    })
    $(".reduceVolume").click(function(){
        $(this).addClass("hover2");
        setTimeout(function (){
            //something you want delayed
            $(".reduceVolume").removeClass("hover2");
        }, 300);
    })
    //hidden confirm layout
    function HideHConfirmLayout(){
        $(".confirm-layout").hide();
    }
    //show confirm layout
    function ShowHConfirmLayout(){
        $(".confirm-layout").show();
    }
	function hidebofang(){
		$("#bofangpage").hide();
		}
	function hideindex(){
		$("#index_page").hide();
		}
	$("#boaniu").click(function(){
		hideindex();
		$("#bofangpage").show();
		});
	$("#setaniu").click(function(){
		hideindex();
		$("#setpage").show();
		});
	$("#setvolaniu").click(function(){
		hideindex();
		$("#setvol").show();
		});
	$("#setvol2").click(function(){
		hideindex();
		hidebofang();
		$("#setvol").show();
		});
	$("#setvole3").click(function(){
		$("#setvol").show();
		$("#guanqianpage").hide();
		});
	$("#lanya").click(function(){
		hidebofang();
		$("#lanyapage").show();
		});;
	$("#guanqiananiu").click(function(){
		hidebofang();
		$("#guanqianpage").show();
	hidebofang();
		});
	$("#setvol2s").click(function(){
		$("#lanyapage").hide();
		$("#setvol").show();
		});
    $("#confirm").click(function(){
        HideHConfirmLayout();
    });
    $("#cancel").click(function(){
        HideHConfirmLayout();
    });
    $("#reset").click(function(){
        ShowHConfirmLayout();
    });
    $(".btn-reset").click(function(){
        ShowHConfirmLayout();
    });
	
})