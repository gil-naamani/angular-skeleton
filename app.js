var dependencies = [
  'ngRoute'
];

var app = angular.module('app', dependencies);

app.config(['$routeProvider', function($routeProvider){
  // Default View
  $routeProvider.when('/other', {
    controller : 'otherController',
    templateUrl : 'views/other.html',
    title : 'other'
  }).otherwise({
    redirectTo : '/'
  });

}]);
