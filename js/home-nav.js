// JavaScript Document

$('document').ready(function(){
	



/*  -------------------------------------------------------------------- PROJECT NAVIGATION IMAGES */
$(".project-nav-one-img-one").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-one.png)");  
});
$(".project-nav-one-img-two").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-two.png)");  
});
$(".project-nav-one-img-three").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-three.png)");  
});
$(".project-nav-one-img-four").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-four.png)");  
});
$(".project-nav-one-img-five").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-five.png)");  
});
$(".project-nav-one-img-six").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-six.png)");  
});
$(".project-nav-one-img-seven").on("click",function(){
	
 $(this).css("background-image", "url(images/project-nav-one-img-seven.png)");  
});
/* PROJECT NAVIGATION IMAGES END */



/*  -------------------------------------------------------------------- PROJECT ONE IMAGES */	
	
$(".projectOne-img-one").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-one").css("background-image", "url(images/projectOne-img-one.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
	 $('.search').css("display", "block");
	 
	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });	
});

	
$(".projectOne-img-two").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px") 
	 $(".projectOne-img-two").css("background-image", "url(images/projectOne-img-two.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	 $('.search').css("display", "block");  
	 
	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });	
});	
	
	
$(".projectOne-img-three").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-three").css("background-image", "url(images/projectOne-img-three.png)");  
	  $('.project-nav-msg-triangle').css("display", "block");
	 $('.search').css("display", "block");
	 
	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });	
});
	
	
$(".projectOne-img-four").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-four").css("background-image", "url(images/projectOne-img-four.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	 $('.search').css("display", "block");  
	 
	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });	
});
	
	
$(".projectOne-img-five").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-five").css("background-image", "url(images/projectOne-img-five.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	 $('.search').css("display", "block");  
	 
	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });		
});
	
	
/*  --------------------------------------------------------------------PROJECT ONE IMAGES END */	



$("#close-button-nav").one('click',function(e){
$(this).on("click",function(ev){
	 ev.preventDefault();
	$('.project-nav-msg-triangle').attr("style", "display: none !important");
});
});



function res(){
	
$('.project-nav-one').css("display", "none");
$('.project-one-msg').css("display", "none");
$('.search').css("display", "none");
$('.project-nav-msg-triangle').css("display", "none");


$(".projectOne-img-one").css("background-image", "none"); 
$(".projectOne-img-two").css("background-image", "none"); 
$(".projectOne-img-three").css("background-image", "none"); 
$(".projectOne-img-four").css("background-image", "none"); 
$(".projectOne-img-five").css("background-image", "none"); 
}


/*  --------------------------------------------------------------------PROJECT TWO IMAGES */	
	
	

$( "map#projectTwo" ).on({
mouseenter: function(ev) {

 var target = $(ev.target);
    var targetId = target.attr('id');
    if(targetId == 'two-optionOne') {
     $('img#projectTwo').attr('src','images/project-two-optionOne.png');
    }
	    if(targetId == 'two-optionTwo') {
     $('img#projectTwo').attr('src','images/project-two-optionTwo.png');
    }
	    if(targetId == 'two-optionThree') {
     $('img#projectTwo').attr('src','images/project-two-optionThree.png');
    }
	    if(targetId == 'two-optionFour') {
     $('img#projectTwo').attr('src','images/project-two-optionFour.png');
    }
	    if(targetId == 'two-optionFive') {
     $('img#projectTwo').attr('src','images/project-two-optionFive.png');
    }

}, mouseleave: function(ev) {

  $('img#projectTwo').attr('src','images/project-two.png');

}, click: function(ev) {


alert('Click worked');


}
});

	

/*  --------------------------------------------------------------------PROJECT TWO IMAGES END */	


/*  --------------------------------------------------------------------PROJECT THREE IMAGES END */	

	
	
$("map#projectThree").mouseover(function(ev){
    var target = $(ev.target);
    var targetId = target.attr('id');
    if(targetId == 'optionOne') {
     $('img#projectThree').attr('src','images/project-three-optionOne.png');
    }
	    if(targetId == 'optionTwo') {
     $('img#projectThree').attr('src','images/project-three-optionTwo.png');
    }
	    if(targetId == 'optionThree') {
     $('img#projectThree').attr('src','images/project-three-optionThree.png');
    }
	    if(targetId == 'optionFour') {
     $('img#projectThree').attr('src','images/project-three-optionFour.png');
    }
	    if(targetId == 'optionFive') {
     $('img#projectThree').attr('src','images/project-three-optionFive.png');
    }
});

$("map#projectThree").mouseout(function(){
     $('img#projectThree').attr('src','images/project-three.png');
});


/*  --------------------------------------------------------------------PROJECT THREE IMAGES END */	



	
});



