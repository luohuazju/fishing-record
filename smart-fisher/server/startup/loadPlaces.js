Meteor.startup(function () {
  if (Place.find().count() === 0) {
    var items = [
    ];
    for (var i = 0; i < items.length; i++){
      Place.insert({name: items[i].name, desc: items[i].desc, public: items[i].public, owner: items[i].owner});
    }
  }
});

