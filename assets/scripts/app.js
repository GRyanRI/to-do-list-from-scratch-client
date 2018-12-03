'use strict'
const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(document).ready(function() {
  $('#signup-form').submit(events.onSignUp)
  $('#signin-form').submit(events.onSignIn)
  $('#signout').click(events.onSignOut)
});
