console.log("js hooked up");
 // scrollspy
 $(document).ready(function(){
    $( "li.navLink" ).click(function( event ) {
        event.preventDefault();
        console.log(window);
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top -55}, 1000);
    });
});

//dropdown event listener
 $('.burgerIcon').on('click', () => {
 	console.log('hit click');

 	$('.dropdownContainer').css('height', 'auto').toggle('drop')
 	// $('.dropdownContainer').toggle('drop', () => {
 	// 	$('.dropdownContainer').css('height', 'auto')
 	// })
 })



//Event listener for explore section
 $('.exploreItem').on('click', async (e) => {
 	console.log(e.currentTarget.id);
 	await $('.' + e.currentTarget.id).fadeToggle(500, () => {
 		$('.' + e.currentTarget.id).css('display', 'flex')
 	})
 	$('.exploreDescription').css('display', 'none')
 	$('.exploreItem div').css('border', 'none')
 	$('.exploreItem').css('opacity', '0.4')
 	if (e.currentTarget.id !== 'predictiveMaintenance') {
	 	$('#'+ e.currentTarget.id + ' div').css('border-left', '5px solid black')
 		
 	}

 	if (e.currentTarget.id !== 'crm') {
	 	$('#'+ e.currentTarget.id + ' div').css('border-right', '5px solid black')
 		
 	}
 	$('#' + e.currentTarget.id).css('opacity', '1')
 	// $('#' + e.currentTarget.id).css('display', 'flex')
 	$('.exploreItems').css('border-bottom', '5px solid black')
 })

//event listener for build section
$('.menuItem').on('click', (e) => {
	console.log('hit menu click');
	$('.menuItem').removeClass('activeMenu')
	$('#' + e.currentTarget.id).toggleClass('activeMenu')
	$('.buildDesc').removeClass('active').css('display', 'none')
	$('.' + e.currentTarget.id).addClass('active').fadeIn(500)
	// $('.' + e.currentTarget.id).fadeIn(500, () => {
	// 	$('.' + e.currentTarget.id).addClass('active')
	// 	$('.' + e.currentTarget.id).fadeIn(500)
	// })
})



















