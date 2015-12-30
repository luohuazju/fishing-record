angular
      .module('smartfisher').controller('PlacesListController', function($scope, $meteor) {
          this.items = $meteor.collection(Place).subscribe('places');

          this.remove = function(item) {
            this.items.remove(item);
          };

          this.add = function(){
            //console.log("asdfasdfasdfasdfasdf" + JSON.stringify(this.newItem));
            Place.insert(this.newItem);
            this.newItem = {};
          }

});
angular
      .module('smartfisher').controller('PlacesDetailController', function($scope, $stateParams, $meteor){
          $scope.item = $meteor.object(Place, $stateParams.placeId, false).subscribe('parties');
          $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

          $scope.save = function(){
            $scope.item.save()
          };

          $scope.reset = function(){
            $scope.item.reset();
          };
});


