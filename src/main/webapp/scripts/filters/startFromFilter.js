'use strict';

angular.module('trabalho3Bimestre').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});