app.controller('techCtrl', function($scope, $http, actionsFactory) {

  $(document).ready(function () {

    actionsFactory.clearTabs()
     $('.tech-link').attr('id', 'active-tab')

    const getTech = function () { // put this in a factory? naaaaahhh
      return $http
        .get('/data/tech.json')
        .then( (res) => $scope.technos = res.data.tech )
    }

    getTech()

  })

})
