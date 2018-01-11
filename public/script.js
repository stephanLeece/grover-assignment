// if textbox isn't empty, add user's message to chat history, then make a post request to server.
// if successful, append bot's reply to chat window. Scroll to bottom automatically.

// setTimeout used to stop bot replying instantaneously.

$(document).keypress(function(e) {
  if (e.which == 13) {
    if ($(textarea).val().match(/[^\s]/)) {
      $('.messageWindow').append(`<div class='message userMessage'>${$(textarea).val()}</div>`)
      $.post({
        url: "/chat",
        data: {
          userMessage: $(textarea).val()
        },
        success: function(data) {
          $(textarea).val('')
          setTimeout(() => {
            $('.messageWindow').append(`<div class='message botMessage'>${data}</div>`)
          }, 1000)
          $(".messageWindow").stop().animate({
            scrollTop: $(".messageWindow")[0].scrollHeight
          }, 1000);
        }
      });
    }
  }
});
