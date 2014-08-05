$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

var app = angular.module('mainPage', []);

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

app.controller('ctrl', ['$scope', '$http', function($scope, $http) {

	$scope.getPage = function(page) {
		$http({
			method: 'get',
			url: page
		}).success(function(response) {
			$scope.page = response;
			if (!$scope.$$phase) {
				$scope.$apply();
			}
			console.log($scope.page);
		});
	};

	$scope.pageUrl = 'content/blog.json';
	$scope.getPage($scope.pageUrl);

	var tabs = document.querySelector('paper-tabs');

	tabs.addEventListener('core-select', function() {
		var oldPageUrl = $scope.pageUrl;
		switch(tabs.selected) {
			case 0:
				$scope.pageUrl = 'content/blog.json';
			break;
			case 1:
				$scope.pageUrl = 'content/about.json';
			break;
			case 2:
				$scope.pageUrl = 'content/projects.json';
			break;
			case 3:
				$scope.pageUrl = 'content/resume.json'
			break;
		}
		if ($scope.pageUrl != oldPageUrl) {
			$scope.getPage($scope.pageUrl);
		}
	});
}]);

