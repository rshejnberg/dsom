// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs


$(function(){

$("#designInfo").hide();
$("#appInfo").hide();
$(".back").hide();
$("#pageHeader").animate({position: 'absolute', top: '-20px'},1000);

 $(document).ready(function(){
			$('#horiz_container_outer').horizontalScroll();
			
			});
$(window).resize(function() {
        adjustStyle($(this).width());
 });
  
var box1open = false;
var box2open = false;  
slideShow();
showWhatDo();
$(".navProjects").click(function(){showProjects();});
$(".navWhatDo").click(function(){showWhatDo();});
$(".navAboutMe").click(function(){showAboutMe();});
$("#box1").click(function(){ if(box2open == true) closeBox2(); openBox1();});
$("#box2").click(function(){ if(box1open == true) closeBox1();openBox2();});
$("#designBack").click(function(){closeBox1();});
$("#appBack").click(function(){closeBox2();});


function showAboutMe(){	
	$("#aboutMe").delay(6000).show();
	$("#projects").hide();
	$("#whatDo").hide();	
    $(".profile").animate({position: 'absolute', top: '-270px'},1100);
	$("#divider").delay(400).animate({height: '300px'},200);
	$("#divider2").animate({height: '0px'}, 500);
	$("#wood-top").delay('2000').animate({ top: '500px' }, 1);
	$("#wood-bottom").delay('1000').animate({ top: '1200px' }, 1);
	}
function showWhatDo(){
	$(".profile").animate({position: 'absolute', top: '-1000px'},1);
	$("#whatDo").fadeIn('1000');
	$("#projects").hide();
	$("#aboutMe").hide();
	$("#divider").animate({height: '300px'},500);
	$("#divider2").animate({height: '0px'}, 500);
		$("#wood-bottom").animate({ top: '868px' }, 2500);
	$("#wood-top").animate({ top: '695px' }, 1500);	
	}
function showProjects(){
	$("#slideshow").scroll();
	$("#wood-top").delay('2000').animate({ top: '500px' }, 1500);
	$("#wood-bottom").delay('1000').animate({ top: '1200px' }, 1500);
	
	
	$("#aboutMe").hide();
	$("#projects").delay('1000').fadeIn('1000');
	$("#whatDo").hide();
	$(".profile").animate({position: 'absolute', top: '-1500px'},1);
	$("#divider").animate({height: '400px'}, 500).animate({ position: 'absolute', top: 	'-150px'},500);
	$("#divider2").animate({height: '400px'}, 500).animate({ position: 'absolute', right: 	'-785px'},500);
	}
function openBox1(){
	box1open = true;
	$("#box2").animate({ top: '300px'}, 800);
	$("#box1").animate({ position: 'absolute', top: '-60px', left: '-10px'}, 1000);
	$("#box1").animate({ width: '420px', height: '300px'}, 1000, 
		function(){$("#designInfo").show(); $("#designBack").css('z-index', '10').show();});
	}
function openBox2(){
	box2open = true;
	$("#box1").animate({ top: '300px'}, 800);
	$("#box2").animate({ position: 'absolute', top: '-60px', left: '10px'}, 1000);
	$("#box2").animate({ width: '400px', height: '300px'}, 1000, 
						function(){$("#appInfo").show(); $("#appBack").css('z-index', '10').show();});
	}
function closeBox1(){
	box1open = false;
	$("#box1").animate({ position: 'absolute', top: '200px', left: '-5px'}, 1000);
	$("#designBack").hide();
	$("#box2").animate({ top: '200px'}, 800);
	$("#box1").animate({ width: '180px', height: '130px'}, 1000, 
		function(){$("#designInfo").hide(); });
	}
function closeBox2(){
	box2open = false;
	$("#box2").animate({ position: 'absolute', top: '200px', left: '250px'}, 1000);
	$("#appBack").hide();
	$("#box1").animate({ top: '200px'}, 800);
	$("#box2").animate({ width: '180px', height: '130px'}, 1000, 
		function(){$("#appInfo").hide(); });
	}

//image slider for home.html
function slideShow(){
	setInterval( function(){ 
	var $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
    // uncomment the 3 lines below to pull the images in random order
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );
    $active.addClass('last-active');
    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, 
    	function() {$active.removeClass('active last-active');});}, 5000);}
});
