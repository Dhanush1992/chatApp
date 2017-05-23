/**
 * Created by dhanush on 5/22/17.
 */

(function () {
        angular.module("chatApp")
            .controller( 'chatController', ChatController);


        function ChatController($scope, $rootScope, socket) {
                $scope.message = '';
                $scope.messages = [];
                $scope.users = [];
                $scope.likes = [];
                $scope.username = $rootScope.username;
                var username = $scope.username;

                socket.emit('get-users');

                socket.on('all-users', function(data) {
                        console.log(data);
                        $scope.users = data.filter(function(item){
                                return item.username !== username;
                        });
                });

                socket.on('message-received', function(data) {
                        $scope.messages.push(data);
                });

                $scope.sendMessage = function(data) {
                        var newMessage = {
                                message: $scope.message,
                                from: $scope.username
                        };
                        socket.emit('send-message', newMessage);
                        $scope.message = '';
                        //$scope.messages.push(newMessage);
                };


        }
})();