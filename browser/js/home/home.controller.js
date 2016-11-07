app.controller('HomeCtrl', function($scope, projects, foodItems) {
    $scope.currentTab = 1;
    $scope.setTab = (tab) => {
    	$scope.currentTab = tab;

    }
    $scope.projects = projects;
    $scope.foodItems = foodItems;



 

    $scope.$on('$viewContentLoaded', function(event) {
        console.log("content loaded");
    });

});