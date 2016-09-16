app.factory('loggerFactory', function () {
  return {
    log: function (statement) {
      console.log(statement);
    }
  }
});
