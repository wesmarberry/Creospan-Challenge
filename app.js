console.log("js hooked up");
 // scroll
 $(document).ready(function(){
    $( "li.navLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top -55}, 1000);
    });
});