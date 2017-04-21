app.controller('homeCtrl', function($scope) {
  $(document).ready(function () {

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

    window.addEventListener('click', (evt) => { // show flower pic on triple click
      if (evt.detail % 3 === 0) {
        $('.profile-pic').attr('src', '../images/daisies.jpg')
      } else
      if (evt.detail % 4 === 0) {
        $('.profile-pic').attr('src', '../images/billy.jpg')
      } else
      if (evt.detail % 5 === 0) {
        $('.profile-pic').attr('src', '../images/schuyler.jpg')
      }
      else {
        $('.profile-pic').attr('src', '../images/headshot.jpg')
      }
    })

  })
})
