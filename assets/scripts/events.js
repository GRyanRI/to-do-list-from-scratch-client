
const api = require('./api.js')
const onSignUp = function(event) {
  console.log(event.target)
  event.preventDefault()
  let email = $('#email').val();
  let password = $('#password').val();
  let confirm = $('#confirm').val()
  console.log('email: ', email)
  console.log('password: ', password)
  console.log('confirm: ', confirm)

  let isValid = true;

  if (email === '') {
    isValid = false;
    $('#errorEmail').html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Email cannot be empty</div>");
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
    const dataObj = {
      'credentials':{
        'email': email,
        'password': password,
        'password_confirmation': confirm
      }
    }
    api.signUpApi(dataObj)
  } else {
    return false;
  }
}


const onSignIn = function(event) {
  event.preventDefault()
  console.log(event.target)
  event.preventDefault()
  let email = $('#signin-form input[name="email"]').val();
  let password = $('#signin-form input[name="password"]').val();

  console.log('email: ', email)
  console.log('password: ', password)

  let isValid = true;

  if (email === '') {
    isValid = false;
    $('#signin-form .errorEmail').html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Email cannot be empty</div>");
  } else {
    $("#signin-form .errorEmail").html("");
  }

  if (password == '') {
    isValid = false;
    $('#signin-form .errorPassword').html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Password cannot be empty</div>")
  } else {
    $('#signin-form .errorPassword').html("");
  }
  if (isValid == true) {
    const dataObj = {
      'credentials':{
        'email': email,
        'password': password
      }
    }
    api.signInApi(dataObj)
  } else {
    return false;
  }
}
const onSignOut = function(event) {
  event.preventDefault()
  api.signOutApi()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
