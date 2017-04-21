app.controller('techCtrl', function($scope, $http) {

  const getTech = function () { // put this in a factory? naaaaahhh
    return $http
      .get('/data/tech.json')
      .then( (res) => $scope.technos = res.data.tech )
  }

  getTech()

})
