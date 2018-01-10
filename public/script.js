

  $(document).keypress(function(e) {
      if(e.which == 13) {
        if($(textarea).val().match(/[^\s]/))
          console.log('enter');
          $('main').append(`<div class='message'>test</div>`)
          console.log($(textarea).val());
          if($(textarea).val() == 'hello') {
            setTimeout(()=> {$('main').append(`<div class='message'>hey! can i help?</div>`);$(textarea).val('');}, 1000)
          }
          else {
            setTimeout(()=> {$('main').append(`<div class='message'>Sorry, i'm not sure...</div>`);$(textarea).val('');}, 1000)
          }


      }
  });
