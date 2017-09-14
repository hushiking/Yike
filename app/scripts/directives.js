
angular.module('Directives', [])

// 自定义指令
.directive('loading', function () {

	return {
		restrict: 'ECMA',
		replace: true,
		template: '<img src="" alt="" />'
	}

});