
var app = angular.module('mainPage', ['angular-flexslider']);

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

app.controller('ctrl', ['$scope', '$http', function($scope, $http) {

	var pageUrls = ['content/blog.json', 'content/about.json', 'content/projects.json', 'content/resume.json'];
	var pages = [];

	var getPage = function() {
			};

	for (var i in pageUrls) {
		$http({
			method: 'get',
			url: pageUrls[i]
		}).success(function(response) {
			pages.push(response);
			if (!$scope.$$phase) {
				$scope.$apply();
			}
		});
	}

	$scope.pageUrl = 'content/blog.json';
	$scope.page = pages[0];

	var tabs = document.querySelector('paper-tabs');

	tabs.addEventListener('core-select', function() {
		$scope.page = pages[tabs.selected];
		if (!$scope.$$phase) {
			$scope.$apply();
		}
	});
}]);
