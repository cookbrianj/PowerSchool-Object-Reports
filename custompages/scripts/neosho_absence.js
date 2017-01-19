define(['angular', 'components/shared/index'], function (angular) {
 var myApp = angular.module('myModule', ['powerSchoolModule']);
 myApp.controller('myController', function($scope, $http) {
  $scope.loading = true;
  $scope.myData = [];
  $scope.attendanceData = [];

  $http.get('neosho_absence.json')
   .then(function(myJSON) {
    myJSON.data.pop();
    $scope.attendanceData = myJSON.data;
    $scope.loading = false;
   });
  });
});
