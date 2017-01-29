(function () {
  var $profilePicPreview = $('#profile-pic-preview').croppie({
      viewport: {
        width: 200,
        height: 200,
        type: 'circle'
      },
      boundary: {
        width: 300,
        height: 300
      },
      enableExif: true,
      // showZoomer: false,
    });

  function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (event) {
        $profilePicPreview.croppie('bind', {
          url: event.target.result
        });
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      alert('Sorry - you\'re browser doesn\'t support the FileReader API');
    }
  }

  $('#profile-picture-upload').on('change', function() { readFile(this); });

  console.log("hey");
})();
