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
                templateUrl: "views/joinPage/join.view.client.html",
                controller: "joinController",
                controllerAs: "model"
            })
            .when("/chat", {
                templateUrl: "views/chatPage/chat.view.client.html",
                controller: "chatController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();