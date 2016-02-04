$(document).ready(function() {
	alert('hello');
	$('.translate').click(function() {
		$('#article-body article').children().toggle();
		console.log('This better work');
	});
});