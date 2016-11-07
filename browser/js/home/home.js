app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
        	projects: (ProjectsFactory) => {
        		return ProjectsFactory.fetchAll()
        	},
            foodItems: (FoodFactory) => {
                return FoodFactory.fetchAll()
            }
        }
    });
});