$(document).ready(function() {
	alert('hello');
	$('.translate').click(function() {
		$('#article-body article').children('p').toggle();
		console.log('This better work');
	});
});