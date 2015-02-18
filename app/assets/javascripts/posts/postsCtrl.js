angular.module('flapperNews')
.controller('PostsCtrl', ['$scope', 'posts', 'post',
  function ($scope, posts, post) {

    $scope.post = post

    $scope.addComment = function(){
      if($scope.body === '') 
        { return; }

      posts.addComment(post.id, {
        body: $scope.body,
        author: 'user'
      }).success(function(comment) {

        if ($scope.post.comments === undefined) 
          $scope.post.comments = [];

        $scope.post.comments.push(comment);
      });
      $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment){
        posts.upvoteComment(post, comment);
    };

}]);

