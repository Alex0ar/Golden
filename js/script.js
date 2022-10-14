$(document).ready(function(){
	$('.nav_burger').click(function(event){
		$('.nav_burger,.menu').toggleClass('active');
	   $('body').toggleClass('lock');
	});
});