/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "$http",
        function ($scope, $http) {
            $scope.title = "Home";
            $scope.newPost = {};


            $scope.addPost = function () {
                $http.post($scope.api + "/posts", $scope.newPost)
                    .then(function (response) {
                        $scope.posts.push($scope.newPost);
                        $scope.newPost = {};
                    });
            }

            //$scope.deletePost = function (index) {
            //    $scope.posts.splice(index, 1);
            //}
            $scope.deletePost = function (post) {

                $http.delete("http://dummyapi.kodalagom.se/api/posts/" + post.id)
                    .success(function () {
                        var index = $scope.posts.indexOf(post);
                        $scope.posts.splice(index, 1);
                    });

            }
        }
    ]);