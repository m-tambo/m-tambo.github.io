app.controller('homeCtrl', function($scope, actionsFactory) {
  $(document).ready(function () {

    actionsFactory.clearTabs()
    $('.home-link').attr('id', 'active-tab')

    setTimeout(function() { // animated print-out of name
        $(".tambo").css("display", "inherit")
        $(".tambo").typed({
            strings: ["michael tambornino"],
            typeSpeed: 5
        })
    }, 1500)

    setTimeout(function() {
        $(".dev").css("display", "inherit")
        $(".dev").typed({
            strings: ["software developer"],
            typeSpeed: 2
        })
    }, 3500)

    document.querySelector('.profile-pic').addEventListener('click', (evt) => { // show flower pic on triple click
      if (evt.detail === 3) {
        $('.profile-pic').attr('src', '../images/daisies.jpg')
      } else
      if (evt.detail === 4) {
        $('.profile-pic').attr('src', '../images/fletcher.jpg')
      } else
      if (evt.detail === 5) {
        $('.profile-pic').attr('src', '../images/billy.jpg')
      } else
      if (evt.detail === 6) {
        $('.profile-pic').attr('src', '../images/schuyler.jpg')
      } else
      if (evt.detail === 7) {
        $('.profile-pic').attr('src', '../images/babyluke.jpg')
      } else {
        $('.profile-pic').attr('src', '../images/headshot.jpg')
      }
    })

  })
})
