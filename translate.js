$(document).ready(function() {
	alert('hello');
	$('.translate').click(function() {
		$('#article-body article p').toggle();
		console.log('This better work');
	});
});