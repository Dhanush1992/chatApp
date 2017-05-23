/**
 * Created by dhanush on 5/22/17.
 */
(function() {
    'use strict';

    angular
        .module('chatApp')
        .factory('socket', socket);

    socket.$inject = ['$rootScope'];

    function socket($rootScope) {
        var socket = io.connect();

        return {
            on: on,
            emit: emit
        };

        function on(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        }

        function emit(eventName, data, callback) {
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }

    }
})();