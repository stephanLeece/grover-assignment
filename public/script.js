// $.ajax({
//
//   url: 'https://elegant-croissant.glitch.me/spotify',
//
//   data: {
//
//     query: $('input').val(),
//
//     type: $('select').val()
//
//   },
//
//   success: showResults
//
// });


$('.button').on('click', () =>{
  console.log('test');
  $('#modal').toggleClass('modalHidden');
  $('#modal').toggleClass('modalVisible');
})
