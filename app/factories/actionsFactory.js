app.factory('actionsFactory', function() {

  return {

    clearTabs () {
      $('.home-link').removeAttr('id')
      $('.contact-link').removeAttr('id')
      $('.projects-link').removeAttr('id')
      $('.tech-link').removeAttr('id')
      $('.about-link').removeAttr('id')
    }
  }

})
