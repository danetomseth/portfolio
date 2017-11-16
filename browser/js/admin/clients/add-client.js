app.config(function($stateProvider) {
	$stateProvider.state('addClient', {
		url: '/addClient',
		templateUrl: '/js/admin/clients/add-client.html',
		controller: 'AddClientCtrl',
		resolve: {
        	clients: (ClientsFactory) => {
        		return ClientsFactory.fetchAll()
        	}
        }
	})
});