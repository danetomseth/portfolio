app.config(function ($stateProvider) {
    $stateProvider.state('landing', {
        url: '/landing',
        templateUrl: 'js/landing/landing.html',
        controller: 'LandingCtrl',
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