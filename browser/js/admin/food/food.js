app.config(function($stateProvider) {
	$stateProvider.state('food', {
		url: '/food-styling',
		templateUrl: '/js/admin/food/food.html',
		controller: 'FoodCtrl',
		resolve: {
            foodItems: (FoodFactory) => {
                return FoodFactory.fetchAll()
            }
        }
	})
});


app.config(function($stateProvider) {
	$stateProvider.state('addFoodItem', {
		url: '/add-food-item',
		templateUrl: '/js/admin/food/add-food.html',
		controller: 'AddFoodCtrl'
	})
});