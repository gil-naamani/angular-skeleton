app.controller("mainController", ['$scope', '$http', 'loggerService', 'loggerFactory', function($scope, $http, loggerService, loggerFactory){

    $scope.greeting = "hello world"
    loggerService.log('Logger service is active');
    loggerFactory.log('Logger factory is active');

}]);
