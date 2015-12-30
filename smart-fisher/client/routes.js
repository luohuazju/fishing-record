angular.module('smartfisher')
.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('placeList', {
        url: '/places',
        templateUrl: 'client/views/place-list.ng.html',
        controller: 'PlacesListController'
      })
      .state('placeDetail', {
        url: '/places/:placeId',
        templateUrl: 'client/views/place-detail.ng.html',
        controller: 'PlacesDetailController',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      });

      $urlRouterProvider.otherwise('/');
})
.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('places');
      }
    });
  });;



