const app = angular.module('portfolio', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {

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
  .when('/tech', {
    controller: 'techCtrl',
    templateUrl: 'app/partials/tech.html'
  })
  .when('/contact', {
    controller: 'contactCtrl',
    templateUrl: 'app/partials/contact.html'
  })
  .otherwise({
    redirectTo: "/home"
  })

  $locationProvider.html5Mode(true)
})
