angular.module('flapperNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            console.log( "$stateParams.id " +$stateParams.id)
            return posts.get($stateParams.id);
          }]
        }

      })
    $urlRouterProvider.otherwise('home')
}]);

/*



angular.module('flapperNews', ['ui.router', 'templates']).config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'

      });
    $stateProvider.state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');
}]);*/