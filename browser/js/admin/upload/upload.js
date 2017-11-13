app.config(function($stateProvider) {
	$stateProvider.state('upload', {
		url: '/upload',
		templateUrl: 'js/admin/upload/upload.html',
		controller: 'UploadCtrl'
	})
});