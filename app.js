$(document).ready(function() {
	var tabs = document.querySelector('paper-tabs');
	var pages = document.querySelector('core-animated-pages');

	tabs.addEventListener('core-select', function() {
		pages.selected = tabs.selected;
	});
});


