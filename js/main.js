require([],function(){var e=false;var i=function(){require(["/js/mobile.js"],function(i){i.init();e=true})};var a=false;var n=function(){require(["/js/pc.js"],function(e){e.init();a=true})};require(["/js/particles.js"],function(e){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:true,value_area:800}},color:{value:["#0fc","#0ff","#ccc","#ffa500","#7b5d5f","#ff945c","#cfb7c4"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:false,anim:{enable:false,speed:1,opacity_min:.1,sync:false}},size:{value:5,random:true,anim:{enable:false,speed:40,size_min:.1,sync:false}},line_linked:{enable:true,distance:150,color:"#ff945c",opacity:.4,width:1},move:{enable:true,speed:6,direction:"none",random:false,straight:false,out_mode:"out",attract:{enable:false,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true,config_demo:{hide_card:false,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})});var t={versions:function(){var e=window.navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&e.indexOf("KHTML")==-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:e.indexOf("Safari")==-1,weixin:e.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(e&&a){$(window).unbind("resize");return}var t=$(window).width();if(t>=700){n()}else{i()}});if(t.versions.mobile===true||$(window).width()<700){i()}else{n()}if(yiliaConfig.fancybox===true){require(["/fancybox/jquery.fancybox.js"],function(e){var i=$(".isFancy");if(i.length!=0){var a=$(".article-inner img");for(var n=0,t=a.length;n<t;n++){var r=a.eq(n).attr("src");var o=a.eq(n).attr("alt");a.eq(n).replaceWith("<a href='"+r+"' title='"+o+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+r+"' title='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox()}})}if(yiliaConfig.animate===true){require(["/js/jquery.lazyload.js"],function(){$(".js-avatar").attr("src",$(".js-avatar").attr("lazy-src"));$(".js-avatar")[0].onload=function(){$(".profilepic").addClass("show")}});if(yiliaConfig.isHome===true){function r(){$(".article").each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")){$(this).removeClass("hidden").addClass("show");$(this).addClass("is-hiddened")}else{if(!$(this).hasClass("is-hiddened")){$(this).addClass("hidden")}}})}$(window).on("scroll",function(){r()});r()}}if(yiliaConfig.open_in_new==true){$(".article a[href]").attr("target","_blank")}});