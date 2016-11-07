app.directive('singleProject', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/singleProject.html',
		link: (scope, elem, attr) => {
			let randomPhoto = ['../../assets/photos/img-17.jpg', '../../assets/photos/img-18.jpg', '../../assets/photos/img-19.jpg', '../../assets/photos/img-20.jpg', '../../assets/photos/img-21.jpg']
			let randomNum = Math.floor(Math.random() * 5) + 1;
			scope.photo = '../../assets/photos/img-21.jpg';
		}
	}
});