var ContactListController = function ($scope) {
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
}
var ContactEditController = function ($scope) {
}

var NavBarController = function ($scope, $location) {
    $scope.isActive = function(path) {
        //return ($location.path() == path);
        //return "la fonction indexOf('x') retourne la premiere position de x trouvé dans cette chaine de texte, soit ici 16".indexOf("x");
        //return $location.absUrl(); // retourne l'adresse URL complete (only getter)- exemple: http://localhost:8080/#/some/path?foo=bar&baz=xoxo 
        //return $location.url(); // retourne le path de l'adresse URL complete (getter/setter)- exemple: /some/path?foo=bar&baz=xoxo 
        //return $location.protocol(); // exemple: http
        //return $location.host(); // exemple: localhost
        //return $location.port(); // exemple: 8080
        //return $location.path(); // exemple: /some/path
        //return $location.search(); // retourne l'objet GET - exemple: {foo: 'bar', baz: 'xoxo'}
        //return $location.hash(); // // given url http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue => "hashValue"
        return $location.path().indexOf(path) != -1;
    }
}