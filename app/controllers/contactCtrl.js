app.controller('contactCtrl', function(actionsFactory) {

  $(document).ready(function () {
    actionsFactory.clearTabs()
     $('.contact-link').attr('id', 'active-tab')

  })

})
