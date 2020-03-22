$(function() {
	$('nav').hover(
		function() {
			$(this).stop().animate(
				{
					left: 0
					
				},
				500,
				'easeInSine'
			);
		},
		function() {
			$(this).stop().animate(
				{
					left: '-140px'
					
				},
				1000,
				'easeOutBounce'
			);
		}
	); //Koniec hover
});