app.controller('AddProjectCtrl', function($scope, ProjectsFactory) {
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


	$scope.addProject = () => {
		$scope.project.content = $scope.contentBlock;
		ProjectsFactory.newProject($scope.project);
		
	}


	$scope.addCategory = (category) => {
		console.log("category: ", category);
	}


});