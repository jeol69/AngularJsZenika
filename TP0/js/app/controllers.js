//zenContactApp.controller('ContactListController', ['$scope', 'contactService', function ($scope, contactService) {
zenContactApp.controller('ContactListController', ['$scope', 'sFcontact', function ($scope, sFcontact) {
    /*
    // ex solution 1
    $scope.contacts = [ 
        { "id":0, "lastName":"Wayne",    "firstName":"Bruce",    "address":"Gotham city",               "phone":"555-BATMAN" },
        { "id":1, "lastName":"Parker",   "firstName":"Peter",    "address":"New York",                  "phone":"555-SPDRMN" },
        { "id":2, "lastName":"Storm",    "firstName":"Jane",     "address":"Baxter building, New York", "phone":"555-INVGRL" },
        { "id":3, "lastName":"Richards", "firstName":"Red",      "address":"Baxter building, New York", "phone":"555-MRFANT" },
        { "id":4, "lastName":"Storm",    "firstName":"Johnny",   "address":"Baxter building, New York", "phone":"555-TORCH"  },
        { "id":5, "lastName":"Grimm",    "firstName":"Benjamin", "address":"Baxter building, New York", "phone":"555-THING"  },
        { "id":6, "lastName":"Murdock",  "firstName":"Matt",     "address":"San Francisco",             "phone":"555-DARDVL" },
        { "id":7, "lastName":"Stark",    "firstName":"Tony",     "address":"Stark tower, New York",     "phone":"555-IRNMAN" }
    ];
    // ex solution 2
    $scope.contacts = contactService.getAllContacts();
    // ex solution 3
    contactService.getAllContacts(function(data) {
        $scope.contacts = data;
    });
    */
    $scope.contacts = sFcontact.query();

    $scope.nameFilter = function(contact) {
        var search = $scope.search || '';
        var lastName = contact.lastName ;
        var firstName = contact.firstName ;
        var filtre = lastName.match(new RegExp(search, "i")) || firstName.match(new RegExp(search, "i"));
        //console.log("contact: ",contact," - search: ",search," - typeof_search: ",typeof(search)," - lastName: ",lastName," - firstName: ",firstName," - filtre: ",filtre," - typeof_filtre: ",typeof(filtre));
        /* javascript infos sur match et RegExp
        var lstVal = "jkjaiaazAikjkAIkllk";//["abc", "baa", "cd"];
        var fltVal = "ai";
        var resVal = lstVal.match(new RegExp(fltVal, "i")); // "i" ind�pendant de la caste, voir aussi RegExp(fltVal, "gi") "g" toutes les occurances
        // remarque: RegExp(/ai/i) est �quivalent � RegExp("ai", "i")
        console.log("lstVal: ",lstVal," - fltVal: ",fltVal," - resVal: ",resVal," - typeof_resVal",typeof(resVal)," - resVal.index: ",resVal['index']);
        */
        return filtre;
    }

}]);

//zenContactApp.controller('ContactEditController', ['$scope', '$routeParams', '$location', 'contactService', function ($scope, $routeParams, $location, contactService) {
zenContactApp.controller('ContactEditController', ['$scope', '$routeParams', '$location', 'sFcontact', function ($scope, $routeParams, $location, sFcontact) {
    $scope.contact = {};
    /*
    // ex solution 1
    if ($routeParams.id) {
        $scope.contact = contactService.getContactById(parseInt($routeParams.id));
        var info =  "$routeParams.id: " + $routeParams.id;
            info += " ==> $scope.contact:  { id: '" + $scope.contact.id + "', lastName: '" + $scope.contact.lastName + "' }";
        console.log(info);
    } else {
        $scope.contact = {};
    }
    // ex solution 2
    if ($routeParams.id) {
        //console.log("$routeParams.id: ",$routeParams.id);
        $scope.contact = contactService.getContactById($routeParams.id, function(data) {
            $scope.contact = data;
        });
    }
    */
    if ($routeParams.id) {
        $scope.contact = sFcontact.get({id:$routeParams.id});
    } else {
        $scope.contact = new sFcontact();
    }
    /*
    // ex solution 1
    $scope.saveContact = function(contact) {
        contactService.saveContact(contact);
        $location.path("/list"); //redirige l'utilisateur vers la liste de contact
    }
    // ex solution 2
    $scope.saveContact = function() {
        contactService.saveContact($scope.contact, function() {
            $location.path('/list');
        });
    };
    */
    $scope.saveContact = function (contact) {
          if (contact.id) {
              contact.$update(function(){
                  $location.path("/list");
              });
          } else {
              sFcontact.save(contact, function(){
                  $location.path("/list");
              });
          }
    }
}]);

zenContactApp.controller('NavBarController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(path) {
        return $location.path().indexOf(path) != -1;
    }
}]);