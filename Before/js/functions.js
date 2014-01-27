$(document).ready(function() {
	// Rollover function for the form submit element
    $("input:image[src$=img/subscribeButton.png]").hover(function() {
        $(this).attr("src", "img/subscribeButtonOver.png")
    }, function(){
        $(this).attr("src", "img/subscribeButton.png")    
    });

    $("input:image[src$=img/submitButton.png]").hover(function() {
        $(this).attr("src", "img/submitButtonOver.png")
    }, function(){
        $(this).attr("src", "img/submitButton.png")    
    });
});
