console.log('app.js');

angular.module('ActivityManager', []);

angular.module('ActivityManager')
  .controller('ActivityController', ['$scope', '$http', function($scope, $http){

    $scope.activities = [];
    $scope.newActivity = {};

    $http.get('/api/activities').then(function(response){
      $scope.activities = response.date;
    })

    $scope.createActivity = function(){

    };

  }]);
