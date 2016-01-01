angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Form data for register modal
  $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/auth.html', {
    scope: $scope
  }).then(function(authModal) {
    $scope.authModal = authModal;
  });


  // Triggered in the login modal to close it
  $scope.closeAuth = function() {
    $scope.authModal.hide();
  };

  // Open the login modal
  $scope.auth = function() {
    //check if we already login
    $scope.authModal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.login = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeAuth();
    }, 1000);
  };

  $scope.register = function() {
    console.log('Doing Register', $scope.registerData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeAuth();
    }, 1000);
  };

})

.controller('SessionsCtrl', function($scope, Session) {
  $scope.sessions = Session.query();
})

.controller('SessionCtrl', function($scope, $stateParams, Session) {
  $scope.session = Session.get({sessionId:$stateParams.sessionId});
});




