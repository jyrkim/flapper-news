/*angular.module('flapperNews')
	.controller('AuthCtrl', ['$scope','$state', function($scope, $state, Auth){

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

}]);*/

angular.module('flapperNews')
	.controller('AuthCtrl', ['$scope','$state','Auth', function($scope, $state, Auth){

  $scope.login = function() {
  	        console.log("login");
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
  	        console.log("register");
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

}]);