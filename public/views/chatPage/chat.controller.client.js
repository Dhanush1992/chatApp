/**
 * Created by dhanush on 5/22/17.
 */
chat.controller( 'chat', [ 'Messages', '$scope', function( Messages, $scope ) {
    // Message Inbox
    $scope.messages = [];
    // Receive Messages
    Messages.receive(function(message) {
        $scope.messages.push(message);
    });
    // Send Messages
    $scope.send = function() {
        Messages.send({
            data: $scope.textbox
        });
    };
}]);