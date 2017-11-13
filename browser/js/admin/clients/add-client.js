app.config(function($stateProvider) {
	$stateProvider.state('addClient', {
		url: '/addClient',
		templateUrl: '/js/admin/clients/add-client.html',
		controller: 'AddClientCtrl',
		resolve: {
        	projects: (ClientsFactory) => {
        		return ClientsFactory.fetchAll()
        	}
        }
	})
});