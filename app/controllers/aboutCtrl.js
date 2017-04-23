app.controller('aboutCtrl', function(actionsFactory) {

  $(document).ready(function () {

    actionsFactory.clearTabs()
     $('.about-link').attr('id', 'active-tab')

  })

})
