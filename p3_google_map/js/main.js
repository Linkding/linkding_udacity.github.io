// one location
function locationModel (name,location) {
  var self = this;

  self.name = ko.observable(name);
  self.location = ko.observable(location);
};

// viewmodel
function locationView()  {
  var self = this;

  self.locationName = [
    {name: '太古汇'},
    {name: '正佳'}
  ];

  self.location = [
    {lat: 23.136088, lng: 113.332012},
    {lat: 24.136088, lng: 115.332012}
  ];

  self.locationTable = ko.observable([
    new locationModel(self.locationName[0].name,self.location[0]),
    new locationModel(self.locationName[1].name,self.location[1])
  ]);

  // toggle ,show all location list
  self.initsatus = ko.observable(false);

  self.toggleFilter = function (){
    self.initsatus(!self.initsatus());
  }
}

ko.applyBindings(new locationView());
// search
function search() {
    var self = this;
    self.allLocation = ko.observableArray("");
    self.query = ko.observable("");
    self.filteredLocation = ko.computed(function () {
        var filter = self.query().toLowerCase();

        if (!filter) {
            return self.allLocation();
        }
        else {
            return ko.utils.arrayFilter(self.allLocation(), function (item) {
                return item.name().toLowerCase().indexOf(filter) !== -1;
            });
        }
    });
};


function loadData(){
  self.locationName = [
    {name: '太古汇'},
    {name: '正佳'}
  ];

  self.location = [
    {lat: 23.136088, lng: 113.332012},
    {lat: 24.136088, lng: 115.332012}
  ];

  search().allLocation.push('nihao');
  // search.allLocation.push(new locationModel(self.locationName[1].name, self.location[1]));
};

$(document).ready(function(){
  loadData();
  ko.applyBindings(new locationView());
  ko.applyBindings(new search());
});
