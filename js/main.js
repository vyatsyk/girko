$(function () {
	$('.level1Link').click(function(){
		$(this).next('.level2').toggle();
		return false;
	});
	$('html').click(function() {
		$('.level2').hide();
	});
	$('.level1Link').click(function(event){
	    event.stopPropagation();
	});
	$('.level2').click(function(event){
	    event.stopPropagation();
	});
	$('.city .level1Link').click(function(event){
	    $('.category .level2').hide();
	});	
	$('.category .level1Link').click(function(event){
	    $('.city .level2').hide();
	});	
});