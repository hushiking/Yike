var Yike = angular.module('Yike', ['ngRoute', 'Controllers'])

// 配置路由
Yike.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/today', {
		templateUrl: './views/today.html',
		controller: 'TodayController'
	})
	.when('/older', {
		templateUrl: './views/older.html',
		controller: 'OlderController'
	})
	.otherwise({
		redirectTo: '/today'
	})

}])