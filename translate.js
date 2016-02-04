$(document).ready(function() {
	alert('hello');
	$('.translate').click(function() {
		// $(this).text('Read in English');
		// $('.headline-kicker').next('h1').text('Zika artigo em Português');
		$('#article-body article p').toggle();
		$('.translate-button').toggle();
		console.log('This better work');
	});
});