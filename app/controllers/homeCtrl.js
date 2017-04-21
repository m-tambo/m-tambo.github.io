app.controller('homeCtrl', function($scope) {
  $(document).ready(function () {
    $(window).load( () => {
      $('.profile-pic').fadeIn('slow')
    })
    // change pic on triple click
    window.addEventListener('click', (evt) => {
      if (evt.detail % 3 === 0) {
        $('.profile-pic').attr('src', '../images/daisies.jpg')
      }
      else {
        $('.profile-pic').attr('src', '../images/headshot.jpg')
      }
    })
  })
})
