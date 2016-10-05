angular.module("mainModule")
    .service("repository", [
        "$http",
        "$q",
        function ($http, $q) {
            this.getPosts = function (URL) {
                var deferred = $q.defer();

                $http.get(URL + "/posts")
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            }
        }
    ]);