'use strict'
const config = require('./config.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(document).ready(function() {

  $("#signup-form").submit(function(event) {
    console.log(event.target)
    event.preventDefault()
    let email = $("#email").val();
    let password = $("#password").val();
    let confirm = $("#confirm").val()
    console.log("email: ", email)
    console.log("password: ", password)
    console.log("confirm: ", confirm)

    let isValid = true;

    if (email == '') {
      isValid = false;
      $("#errorEmail").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Email cannot be empty</div>");
    } else {
      $("#errorEmail").html("");
    }

    if (password == '') {
      isValid = false;
      $("#errorPassword").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Password cannot be empty</div>")
    } else {
      $("#errorPassword").html("");
    }

    if (confirm == '') {
      isValid = false;
      $("#errorConfirm").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Confirm cannot be empty</div>")
    } else {
      $("#errorConfirm").html("");
    }

    if (isValid == true) {
      //ajax method to send info
      $.ajax({
        url: config.apiUrl + '/sign-up',
        method: "POST",
        data: {
          'credentials': {
            "email": email,
            "password": password,
            "password_confirmation": confirm
          }

        },
        success: function() {
          console.log("Sign up successful")
        }
      })
    } else {
      return false;
    }
  });

});
