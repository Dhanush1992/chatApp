/**
 * Created by dhanush on 5/22/17.
 */
(function () {
    angular.module("chatApp")
        .controller("joinController", joinController);

    function joinController($scope, $location, $rootScope) {
        $scope.username = "";
        var uName;

        $scope.goToChatPage = function () {
            if ($scope.username) {
                uName = $scope.username;
                $rootScope.uName = uName;
                $location.path("/chat");
            }
        }
    }

})();