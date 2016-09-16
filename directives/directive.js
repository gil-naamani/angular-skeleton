app.directive('directiveExample', function() {
  return {
      restrict: 'E',
      replace: 'true',
      scope: {
        message: '@message'
      },
      template: '<h6>Im a directive!!</h6>',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          elem.css('color', 'red');
          scope.$apply(function() {
            alert(scope.message);
          });
        });
      }

  };
});
