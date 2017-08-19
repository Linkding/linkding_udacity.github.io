// one address
function addressModel (name,lat,lng) {
  var self = this;
  self.name = ko.observable(name);
  self.lat = ko.observable(lat);
  self.lng = ko.observable(lng);
};

// viewmodel
function addressView()  {
  var self = this;

  self.addressName = [
    {name: '太古汇'},
    {name: '正佳'}
  ];

  self.address = [
    {lat: 23.136088, lng: 113.332012},
    {lat: 24.136088, lng: 115.332012}
  ];

  self.addressTable = ko.observable([
    new addressModel(self.addressName[0].name,self.address[0]),
    new addressModel(self.addressName[1].name,self.address[1])
  ]);

  // toggle ,show all address list
  self.initsatus = ko.observable(false);

  self.toggleFilter = function (){
    self.initsatus(!self.initsatus());
  };

  // search
  // self.search = function (){
  //   self.alladdress = ko.observableArray("");
  //   self.query = ko.observable("");
  //   self.filteredaddress = ko.computed(function () {
  //       var filter = self.query().toLowerCase();
  //
  //       if (!filter) {
  //           return self.alladdress();
  //       }
  //       else {
  //           return ko.utils.arrayFilter(self.alladdress(), function (item) {
  //               return item.name().toLowerCase().indexOf(filter) !== -1;
  //           });
  //       }
  //   });
  }
  // console.log(self.alladdress)
  // search.alladdress.push(new addressModel('太古汇', 23, 24));

}

ko.applyBindings(new addressView());

// search
// function search() {
//     var self = this;
//     self.alladdress = ko.observableArray("");
//     self.query = ko.observable("");
//     self.filteredaddress = ko.computed(function () {
//         var filter = self.query().toLowerCase();
//
//         if (!filter) {
//             return self.alladdress();
//         }
//         else {
//             return ko.utils.arrayFilter(self.alladdress(), function (item) {
//                 return item.name().toLowerCase().indexOf(filter) !== -1;
//             });
//         }
//     });
//
// };


// function loadData(){
//   var self = this;
//   self.addressName = [
//     {name: '太古汇'},
//     {name: '正佳'}
//   ];
//
//   self.address = [
//     {lat: 23.136088, lng: 113.332012},
//     {lat: 24.136088, lng: 115.332012}
//   ];
//
//   search().alladdress.push('nihao',23,24);
//   //self.search.alladdress.push(new addressModel('太古汇', 23, 24));
// };

// $(document).ready(function(){
//   loadData();
//   ko.applyBindings(new addressView());
//   ko.applyBindings(new search());
// });
