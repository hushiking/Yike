// 控制器模块
angular.module('Controllers', [])

.controller('NavsController', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'}
	]
}])

// .controller('TodayController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
// 	$rootScope.loaded = false
// 	$http({
// 		url: './api/today.php'
// 	}).success(function(info) {
// 		console.log(info)
// 	})
// }])

// 今日一刻
.controller('TodayController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	
	$rootScope.loaded = false;

	// 异步请求
	$http({
		url: './api/today.php',
		// method: '',
		// params: {}
	}).success(function (info) {
		// info 返回的数据
		// 获取到的数据
		$scope.posts = info.posts;

		$scope.date = info.date;

		$rootScope.loaded = true;
	});

}]) 