$(document).ready(function() {
	$('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/lipis/flag-icon-css/master/css/flag-icon.min.css">');
	var OG_headline = $('.headline-kicker').next('h1').innerHTML;
	$('.translate').click(function() {
		// $(this).text('Read in English');
		$('.headline-kicker').next('h1').toggleClass('.translated');
		if ($('.headline-kicker').hasClass('translated')) {
			$(this).html('Zika história em Português');
		} else {
			$(this).html(OG_headline);
		}
		$('#article-body article p').toggle();
		$('.flag-icon').toggle();
		$('.translate-button').toggle();
	});
});