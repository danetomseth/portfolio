app.controller('AddFoodCtrl', function($scope, FoodFactory) {
	$scope.categories = [
		{
			title: 'Blog Post'
		},
		{
			title: 'Recipe'
		},
		{
			title: 'Other'
		}
	]


	$scope.contentPiece = "";

	$scope.contentBlock = [];


	$scope.addBlock = () => {
		$scope.contentBlock.push($scope.contentPiece);
		$scope.contentPiece = "";
	}


	$scope.addFood = () => {
		$scope.food.content = $scope.contentBlock;
		FoodFactory.newFood($scope.food);
		
	}


	$scope.addCategory = (category) => {
		console.log("category: ", category);
	}


});