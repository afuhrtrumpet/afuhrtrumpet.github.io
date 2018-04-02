$(document).ready(function() {
	var tabs = document.querySelector('paper-tabs');
	var pages = document.querySelector('core-animated-pages');

	tabs.addEventListener('core-select', function() {
		pages.selected = tabs.selected;
	});
	var $container = $('.tiles');

	var form = document.querySelector('#contactform');

	form.addEventListener('submitted', function() {
		document.querySelector('#toast').show();
		$('#contactform')[0].reset();
	});
});


