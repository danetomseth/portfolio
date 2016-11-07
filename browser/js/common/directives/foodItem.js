app.directive('foodItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/foodItem.html',
		link: (scope, elem, attr) => {
			let randomPhoto = ['../../assets/photos/img-22.jpg', '../../assets/photos/img-23.jpg', '../../assets/photos/img-24.jpg']
			let randomNum = Math.floor(Math.random() * 3) + 1;
			// scope.photo = randomPhoto[randomNum];
			scope.photo = "../../assets/photos/img-22.jpg"

		}
	}
});