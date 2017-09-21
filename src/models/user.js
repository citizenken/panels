var Immutable = require('seamless-immutable');
var firebase = require('firebase');
var stateStore = undefined;
if (process.type !== 'browser') {
  stateStore = require('../rendererStore');
  var firebaseService = require('electron').remote.getGlobal('firebaseService');
} else {
  stateStore = require('../mainStore');
}

module.exports = {
  User,
}

function User(user) {
  debugger
  var newUser = Immutable({
    id: user.uid,
    currentCursorPosition: {},
    displayName: user.displayName,
    files: {},
    username: user.email
  })

  firebase.database().ref('/users/' + newUser.id).set(newUser)
  return newUser;
};