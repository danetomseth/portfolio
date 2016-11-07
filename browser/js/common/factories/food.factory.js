app.factory('FoodFactory', function($http){
	let service = {};


	service.newFood = (food) => {
		$http.post('/api/food', food).then(res => {
			console.log("server response: ", res.data);
		})
	}


	service.fetchAll = () => {
		return $http.get('/api/food').then(res => {
			return res.data
		})
	}

	service.fetchOne = (foodId) => {
		return $http.get('/api/food/' + foodId).then( res => {
			return res.data
		})
	}



	return service
});