app.controller('projectsCtrl', function(actionsFactory) {

  $(document).ready(function () {
    actionsFactory.clearTabs()
     $('.projects-link').attr('id', 'active-tab')

  })

})
