app.config(function($stateProvider) {
	$stateProvider.state('projects', {
		url: '/projects',
		templateUrl: '/js/admin/projects/projects.html',
		controller: 'ProjectsCtrl',
		resolve: {
        	projects: (ProjectsFactory) => {
        		return ProjectsFactory.fetchAll()
        	}
        }
	})
});

app.config(function($stateProvider) {
	$stateProvider.state('singleProject', {
		url: '/projects/:projectId',
		templateUrl: '/js/admin/projects/single-project.html',
		controller: 'SingleProjectCtrl',
		resolve: {
			project: ($stateParams, ProjectsFactory) => {
				return ProjectsFactory.fetchOne($stateParams.projectId)
			}
		}
	})
});


app.config(function($stateProvider) {
	$stateProvider.state('addProject', {
		url: '/addProject',
		templateUrl: '/js/admin/projects/add-project.html',
		controller: 'AddProjectCtrl',
		resolve: {
        	projects: (ProjectsFactory) => {
        		return ProjectsFactory.fetchAll()
        	}
        }
	})
});