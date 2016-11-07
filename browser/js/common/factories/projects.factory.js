app.factory('ProjectsFactory', function($http){
	let service = {};


	service.newProject = (project) => {
		$http.post('/api/projects', project).then(res => {
			console.log("server response: ", res.data);
		})
	}


	service.fetchAll = () => {
		return $http.get('/api/projects').then(res => {
			return res.data
		})
	}

	service.fetchOne = (projectId) => {
		return $http.get('/api/projects/' + projectId).then( res => {
			return res.data
		})
	}



	return service
});