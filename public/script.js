

  $(document).keypress(function(e) {
      if(e.which == 13) {
        if($(textarea).val().match(/[^\s]/))
          console.log('enter');
          $('main').append(`<div class='message'>heya</div>`)
          $(textarea).val('');
      }
  });
