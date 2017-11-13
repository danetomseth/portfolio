app.controller('AddClientCtrl', function($scope, ClientsFactory) {



	$scope.addBlock = () => {
		$scope.contentBlock.push($scope.contentPiece);
		$scope.contentPiece = "";
	}


	$scope.addClient = () => {
		console.log($scope.client)
		ClientsFactory.create($scope.client);
		
	}


	$scope.addCategory = (category) => {
		console.log("category: ", category);
	}


});