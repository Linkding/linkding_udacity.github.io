function address(Name, lat, lng) {
    this.Name = ko.observable(Name);
    this.lat = ko.observable(lat);
    this.lng = ko.observable(lng);
}

function model() {
    var self = this;
    self.addresss = ko.observableArray("");
    self.query = ko.observable("");
    self.filteredaddresss = ko.computed(function () {
        var filter = self.query().toLowerCase();

        if (!filter) {
            return self.addresss();
        } else {
            return ko.utils.arrayFilter(self.addresss(), function (item) {
                return item.Name().toLowerCase().indexOf(filter) !== -1;
            });
        }
        
    });

    self.pasentAddress = ko.observable();

    self.showPasentAddress = function(place){
      hideListings()
      // console.log(self.addresss().Name)
      // address Name push into a array
      var addressNameArray = [];
      for (var i = 0; i < locations.length; i++) {
        addressNameArray.push(locations[i].title)
      }
      var i  = addressNameArray.indexOf(place.Name());
      var bounds = new google.maps.LatLngBounds(locations[i].position);
      // Extend the boundaries of the map for each marker and display the marker
      // for (var i = 0; i <= indexofAddressNum.length; i++) {
      // map = new google.maps.Map(document.getElementById('map'), {
      //   center: {lat: 23.136088, lng: 113.332012},
      //   zoom: 13,
      //   // styles: styles,
      //   mapTypeControl: false
      // });
      markers[i].setMap(map);
      // bounds.extend(markers[i].position);
      // map.fitBounds(bounds);

      };

}


var mymodel = new model();

$(document).ready(function () {
    loaddata();
    ko.applyBindings(mymodel);
});

function loaddata() {
    mymodel.addresss.push(new address(locations[0].title, locations[0].location.lat, locations[0].location.lng));
    mymodel.addresss.push(new address(locations[1].title, locations[1].location.lat, locations[1].location.lng));
    mymodel.addresss.push(new address(locations[2].title, locations[2].location.lat, locations[2].location.lng));
    mymodel.addresss.push(new address(locations[3].title, locations[3].location.lat, locations[3].location.lng));
    mymodel.addresss.push(new address(locations[4].title, locations[4].location.lat, locations[4].location.lng));
    mymodel.addresss.push(new address(locations[5].title, locations[5].location.lat, locations[5].location.lng));
}
