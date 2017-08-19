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

    self.showPasentAddress = function(){
      var self = this;
      var pasentAddressList = self.filteredaddresss;
      var i = ko.utils.arrayFilter(self.pasentAddressList, function (item) {
       return item.Name().toLowerCase().indexOf());
    }



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
