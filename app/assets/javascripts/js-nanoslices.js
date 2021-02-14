// // js intro

// alert('hello world!')

// greetingDoubler = function(phrase) {
//   alert(phrase + " " + phrase);
// };

// greetingDoubler('hello!')

// // jquery intro

// messageAppender = function(phrase) {
//   $('#messages-table').append(phrase);
// }

// $(document).on('turbolinks:load', function() {
//   messageAppender('hello, world! From jquery');
// })

// // js equivalent

// messageAppender = function(phrase) {
//   let messagesTable = document.querySelector('#messages-table');
//   messagesTable.append(phrase);
// }

// document.addEventListener('turbolinks:load', function() {
//   messageAppender('hello, world! From modern js')
// })
