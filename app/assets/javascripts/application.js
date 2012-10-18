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
//= require twitter/bootstrap

$(function(){
showSlideOne();

$("li").hover(function(){
	var myClass = $(this).attr("class");
	if(myClass == 'navHome')
	 $('.navHomePop').css('visibility', 'visible');
	 if(myClass == 'navWhatDo')
	 $('.navWhatDoPop').css('visibility', 'visible');
	 if(myClass == 'navAboutMe')
	 $('.navAboutMePop').css('visibility', 'visible');
	 if(myClass == 'navProjects')
	 $('.navProjectsPop').css('visibility', 'visible');
	}, 
	function(){
	$('.navHomePop').css('visibility', 'hidden');
	$('.navProjectsPop').css('visibility', 'hidden');
	$('.navWhatDoPop').css('visibility', 'hidden');
	$('.navAboutMePop').css('visibility', 'hidden');
	});
var clickCount = 0;
$('#homeSlidePrev').click(
	function(){
		if (clickCount > 0)
		clickCount--;

		switch(clickCount)
			{
			case 0:
				showSlideOne();
				
				break;
			case 1:
				showSlideTwo();
				break;
			case 2:
				showSlideThree();
				break;
			case 3:
				showSlideFour();
				break;
			case 4:
				showSlideFour();
				break;
			default: 
				alert(clickCount);
				showSlideFour();
				clickCount = 4;
				
			}
	
		});
$('#homeSlideNext').click(
	function(){
		
		if(clickCount <= 4)
			clickCount++;

		switch(clickCount)
			{
			
			case 1:
				showSlideTwo();
				break;
			case 2:
				showSlideThree();
				break;
			case 3:
				showSlideFour();
				break;
			default: 
				showSlideOne();
				clickCount = 0;
				
			}
	
		});

function showSlideOne()
{
	var firstTime = true;
	var position = 50;
	$('#homeSlidePrev').css('color', 'gray');
	$("#homePage").animate({top: '7px'}, 1000);
	$("#wordlistcontainer").delay('1000');
	for(var wordNumber=0; wordNumber<6; wordNumber++)
		{
		var posStringPre = '-';
		var posStringSuff = 'px';
		var posString = posStringPre + position + posStringSuff;
		$("#wordlistcontainer").delay('1000').animate({position: 'relative', top: posString}, 200);
		position += 50;
		firstTime = false;
		}
		$("#homeSlidePrev").hide();
	
}
function showSlideTwo()
{
	
	$("#homePage").animate({top: '-460px'}, 1000);
	$("#homeSlidePrev").fadeIn(1500);
}
function showSlideThree()
{

	$("#homePage").animate({top: '-1000px'}, 1000);

}
function showSlideFour()
{

	$("#homePage").animate({top: '-1550px'}, 1000);

}

var div = $(this).next('.projectCaption');
$('.project').hover(function(){
	$(this).children().animate({top: '-9px'}, 300);
}, function(){
	$(this).children().animate({top: '-51px'}, 300);
});
});
