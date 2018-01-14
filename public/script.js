// if textbox value != '' or ' ', append users meessage to chat window, then make a post request to server.
// if successful, append bot's reply to chat window. Scroll to bottom automatically.

// setTimeout used to stop bot replying instantaneously.

const welcomeMessages = ['Hi! What are you looking for today?', 'Hey there. What are you thinking of renting?',
    'Hello! What are you interested in?'];

$('#botWelcomeMsg').html(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);

$(document).keypress(function(e) {
    if (e.which == 13) {
        if ($('#textArea').val().match(/[^\s]/)) {
            $('#messageWindow').append(`<div class='message userMessage'>${$('#textArea').val()}</div>`);
            $("#messageWindow").stop().animate({
                scrollTop: $("#messageWindow")[0].scrollHeight
            }, 500);
            $.post({
                url: "/chat",
                data: {
                    userMessage: $('#textArea').val()
                },
                success: function(data) {
                    $('#textArea').val('');
                    setTimeout(() => {
                        $('#messageWindow').append(`<div class='message botMessage'>${data}</div>`);
                        $("#messageWindow").stop().animate({
                            scrollTop: $("#messageWindow")[0].scrollHeight
                        }, 500);
                    }, 1000);

                }
            });
        }
    }
});
