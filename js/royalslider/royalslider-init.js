$().ready(function($) {
	$(".royalSlider ").royalSlider({
	    // fullscreen: {
	    //   enabled: true,
	    //   nativeFS: true
	    // },
	    controlNavigation: 'thumbnails',
	    autoScaleSlider: true, 
	    autoScaleSliderWidth: 960,     
	    autoScaleSliderHeight: 800,
	    loop: false,
	    imageScaleMode: 'fit-if-smaller',
	    imageScalePadding: 15,
	    navigateByClick: true,
	    arrowsNav:true,
	    arrowsNavAutoHide: false,
	    arrowsNavHideOnTouch: true,
	    keyboardNavEnabled: true,
	    fadeinLoadedSlide: true,
	    globalCaption: true,
	    globalCaptionInside: false,
	    thumbs: {
	      appendSpan: true,
	      firstMargin: true,
	    },
	    padding: 10,
	});  
});