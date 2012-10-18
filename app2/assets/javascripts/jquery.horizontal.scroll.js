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


	(function($){
			$(window).load(function(){
				$("#content_1").mCustomScrollbar({
					horizontalScroll:true,
					scrollButtons:{
						enable:true,
						scrollType:"pixels",
						scrollAmount:116
					}
				});
								/* toggle buttons scroll type */
				$("a[rel='toggle-buttons-scroll-type']").click(function(e){
					e.preventDefault();
					var $this=$(this);
					var cont=$("#content_2");
					var scrollType;
					if(cont.data("scrollButtons-scrollType")==="pixels"){
						scrollType="continuous";
					}else{
						scrollType="pixels";
					}
					cont.data({"scrollButtons-scrollType":scrollType}).mCustomScrollbar("update");
					$this.toggleClass("off");
				});
				/* snap scrollbar fn */
				var snapTo=[];
				$("#content_2 .images_container img").each(function(){
					var $this=$(this);
					var thisX=$this.position().left;
					snapTo.push(thisX);
				});
				function snapScrollbar(){
					if(!$(document).data("mCS-is-touch-device")){ //no snapping for touch devices
						var posX=$("#content_2 .mCSB_container").position().left;
						var closestX=findClosest(Math.abs(posX),snapTo);
						if(closestX===0){
							$("#content_2").mCustomScrollbar("scrollTo","left",{
								callback:false //scroll to is already a callback fn
							});
						}else{
							$("#content_2").mCustomScrollbar("scrollTo",closestX,{
								callback:false //scroll to is already a callback fn
							});
						}
					}
				}
				function findClosest(num,arr){
	                var curr=arr[0];
    	            var diff=Math.abs(num-curr);
        	        for(var val=0; val<arr.length; val++){
            	        var newdiff=Math.abs(num-arr[val]);
                	    if(newdiff<diff){
                    	    diff=newdiff;
                        	curr=arr[val];
                    	}
                	}
                	return curr;
            	}
			});
		})(jQuery);