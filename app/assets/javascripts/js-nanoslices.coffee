# js intro

alert 'hello world!'

greetingDoubler = (phrase) ->
  alert(phrase + " " + phrase)

greetingDoubler 'hello!'

# jquery intro

messageAppender = (phrase) ->
  $('#messages-table').append phrase

$(document).on('turbolinks:load', () ->
  messageAppender 'hello, world! From jquery';
)

# js equivalent

messageAppender = (phrase) ->
  messagesTable = document.querySelector '#messages-table'
  messagesTable.append phrase;

document.addEventListener('turbolinks:load', () ->
  messageAppender 'hello, world! From modern js'
)
