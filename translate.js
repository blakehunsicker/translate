$(document).ready(function() {
	$('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/lipis/flag-icon-css/master/css/flag-icon.min.css">');
	$('.translate').click(function() {
		// $(this).text('Read in English');
		// $('.headline-kicker').next('h1').text('Zika artigo em Português');
		$('#article-body article p').toggle();
		$('.flag-icon').toggle();
		$('.translate-button').toggle();
	});
});