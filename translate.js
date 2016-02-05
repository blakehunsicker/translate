$(document).ready(function() {
	$('head').append(
		'<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/lipis/flag-icon-css/master/css/flag-icon.min.css">',
		'<link rel="stylesheet" type="text/css" href="https://rawgit.com/blakehunsicker/translate/master/translate.css">'
		);
	var headline = $('.headline-kicker').next('h1');
	$('.translate').click(function() {
		$(headline).toggleClass('.translated');
		if ($(headline).hasClass('translated')) {
			$(this).text('Zika história em Português');
		} else {
			$(this).text('Zika article in English');
		}
		$('#article-body article p').toggle();
		$('.flag-icon').toggle();
		$('.translate-button').toggle();
	});
});