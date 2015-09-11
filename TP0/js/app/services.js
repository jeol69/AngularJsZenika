'use strict';

var zenContactServices = angular.module('zenContactServices',[]); // Module correspondant à la couche service (découplage de l'application pour futur tests)

zenContactServices.factory('contactService', function() { // déclaration du service contactService responsable de la gestion des contacts
        var instance = {};

        var contacts = [
            { "id":0, "lastName":"Wayne",    "firstName":"Bruce",    "address":"Gotham city",               "phone":"555-BATMAN" },
            { "id":1, "lastName":"Parker",   "firstName":"Peter",    "address":"New York",                  "phone":"555-SPDRMN" },
            { "id":2, "lastName":"Storm",    "firstName":"Jane",     "address":"Baxter building, New York", "phone":"555-INVGRL" },
            { "id":3, "lastName":"Richards", "firstName":"Red",      "address":"Baxter building, New York", "phone":"555-MRFANT" },
            { "id":4, "lastName":"Storm",    "firstName":"Johnny",   "address":"Baxter building, New York", "phone":"555-TORCH"  },
            { "id":5, "lastName":"Grimm",    "firstName":"Benjamin", "address":"Baxter building, New York", "phone":"555-THING"  },
            { "id":6, "lastName":"Murdock",  "firstName":"Matt",     "address":"San Francisco",             "phone":"555-DARDVL" },
            { "id":7, "lastName":"Stark",    "firstName":"Tony",     "address":"Stark tower, New York",     "phone":"555-IRNMAN" }
        ];

        instance.getAllContacts = function() {
            var list_lastName =""
            for (var key in contacts) {
                list_lastName += (list_lastName!=""?", ":"") + contacts[key].lastName; // log dans la console
            }
            console.log("liste des lastName des contacts: "+list_lastName);
            return contacts;
        };

        instance.getContactById = function(idParam) {
                for (var i=0 ; i< contacts.length ; i++) {
                    if (contacts[i].id === idParam) {
                        return contacts[i];
                    }
                }
                // return _.findWhere(contacts, {id: idParam})   //undeurscore.js
        }

        instance.saveContact = function(contact) {
                    // TODO;
        }

        instance.saveContact = function (contact) {
        if (contact.id) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id == contact.id) {
                    contacts.splice(i, 1, contact);
                }
            }
        } else {
            contact.id = contacts.length;
            contacts.push(contact);
        }
    };

        return instance;
});