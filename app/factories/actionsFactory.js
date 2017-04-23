app.factory('actionsFactory', function() {

  return {

    clearTabs () {
      console.log(`clear tabs function fired`)
      $('.home-link').removeAttr('id')
      $('.contact-link').removeAttr('id')
      $('.projects-link').removeAttr('id')
      $('.tech-link').removeAttr('id')
      $('.about-link').removeAttr('id')
    }
  }

})
