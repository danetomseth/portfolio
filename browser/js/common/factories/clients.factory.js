app.factory("ClientsFactory", function($http, $state) {
	let service = {};


	service.fetchAll = () => {
		return $http.get('/api/clients').then((res) => {
			console.log(res.data);
			return res.data
		})
	}

	service.fetchOne = (clientId) => {
		return $http.get('/api/clients/' + clientId).then((res) => {
			console.log(res.data);
			return res.data
		})
	}


	service.create = (content) => {
		$http.post('/api/clients', content).then(res => {
			console.log(res)
			if(res.status == 200) {
				$state.reload()
			}
			else {
				console.log("ERROR")
			}
			
		})
	}


	service.delete = (clientId) => {
		console.log(clientId)
		$http.delete('/api/clients/' + clientId).then(res => {
			console.log(res)
			if(res.status == 200) {
				$state.reload()
			}
			else {
				console.log("ERROR")
			}
		})
	}

	return service
});