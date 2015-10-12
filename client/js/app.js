console.log('app.js');

angular.module('ActivityManager', []);

angular.module('ActivityManager')
  .controller('ActivityController', ['$scope', '$http', function($scope, $http){

    $scope.activities = [];
    $scope.newActivity = {};

    $scope.getActivity = function(){
      $http.get('/api/activities').then(function(response){
        $scope.activities = response.data;
      });
    };

    $scope.createActivity = function(){
      console.log('inside createActivity');
      $http.post('/api/activities', $scope.newActivity).then(function(response){
        console.log('activ', $scope.activities);
        $scope.activities.push(response.data);
      });
    };

    $scope.removeActivity = function(activity){
      var url = '/api/activities/' + activity._id;
      $http.delete(url).then(function(response){
        $scope.getActivity();
      });
    };

    $scope.getActivity();

  }]);
