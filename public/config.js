/**
 * Created by dhanush on 5/22/17.
 */
(function() {
    angular
        .module("chatApp")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/chat.view.client.html",
                controller: "chatController",
                controllerAs: "model"
            })


            .otherwise({
                redirectTo: "/"
            });
    }
})();