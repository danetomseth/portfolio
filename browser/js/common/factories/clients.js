app.factory("ClientsFactory", function($http) {
	let service = {};


	service.fetchAll = () => {
		return $http.get('/api/clients').then((res) => {
			console.log(res.data);
			return res.data
		})
	}


	service.create = (content) => {
		$http.post('/api/clients', content).then(res => {
			console.log("server response: ", res.data);
		})
	}

	return service
})