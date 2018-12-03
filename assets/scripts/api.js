const config = require('./config.js')
const store = require('./store.js')
const signUpApi = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: "POST",
    data: data,
    success: function() {
      console.log("Sign up successful")
    }
  })
}

const signOutApi = function(){
  return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: 'DELETE',
      headers: {
      Authorization: 'Token token=' + store.user.token
    },
      success: function() {
        store.user = null
        console.log("sign out successful")
      }
    })
}

const signInApi = function(data){
  return $.ajax({
      url: config.apiUrl + '/sign-in',
      method: 'POST',
      data: data,
      success: function(response) {
        store.user = response.user
        console.log(store.user)
      }
    })
}

module.exports = {
  signUpApi,
  signOutApi,
  signInApi
}
