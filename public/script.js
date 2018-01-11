

  $(document).keypress(function(e) {
      if(e.which == 13) {
        if($(textarea).val().match(/[^\s]/))
          console.log('enter');
          $('main').append(`<div class='message'>${$(textarea).val()}</div>`)
          $.post({
            url: "/chat",
            data: {userMessage: $(textarea).val()},
            success: function (data) {
              $(textarea).val('')
              $('main').append(`<div class='message'>${data}</div>`)
              console.log(data);
            },

          });

      }
  });
