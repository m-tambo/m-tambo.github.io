app.controller('homeCtrl', function($scope) {
  $(document).ready(function () {

    setTimeout(function() { // animated print-out of name
        $(".tambo").css("display", "inherit")
        $(".tambo").typed({
            strings: ["michael tambornino"],
            typeSpeed: 5
        })
    }, 150)

    setTimeout(function() {
        $(".dev").css("display", "inherit")
        $(".dev").typed({
            strings: ["software developer"],
            typeSpeed: 2
        })
    }, 2000)

    window.addEventListener('click', (evt) => { // show flower pic on triple click
      if (evt.detail % 3 === 0) {
        $('.profile-pic').attr('src', '../images/daisies.jpg')
      }
      else {
        $('.profile-pic').attr('src', '../images/headshot.jpg')
      }
    })

  })
})
