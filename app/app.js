const app = angular.module('portfolio', ['ngRoute'])

app.config(($routeProvider) => {

  $routeProvider
  .when('/', {
    controller: 'homeCtrl',
    templateUrl: 'app/partials/home.html'
  })
  .when('/about', {
    controller: 'aboutCtrl',
    templateUrl: 'app/partials/about.html'
  })
  .when('/projects', {
    controller: 'projectsCtrl',
    templateUrl: 'app/partials/projects.html'
  })
  .when('/contact', {
    controller: 'contactCtrl',
    templateUrl: 'app/partials/contact.html'
  })
  .otherwise({
    redirectTo: "/home"
  })

})
