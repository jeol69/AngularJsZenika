'use strict';

var zenContactServices = angular.module('zenContactServices', []); // Module correspondant à la couche service (découplage de l'application pour futur tests)

//zenContactServices.factory('contactService', function($http) { // déclaration du service contactService responsable de la gestion des contacts
zenContactServices.service('contactService', function($http) { // déclaration du service contactService responsable de la gestion des contacts
        //var instance = {};
        //instance.getAllContacts = function(callback) {
        this.getAllContacts = function(callback) {
            $http
                .get('/rest/contacts')
                .success(
                    function(data) {
                        callback(data);
                    }
                )
                .error(
                    function () {
                        callback({});
                    }
                );
        }

        //instance.getContactById = function(idParam, callback) {
        this.getContactById = function(idParam, callback) {
            $http
                .get('/rest/contacts/' + idParam)
                .success(
                    function(data) {
                        callback(data);
                    }
                )
                .error(
                    function () {
                        callback({});
                    }
                );
        }

        //instance.saveContact = function(contact, callback) {
        this.saveContact = function(contact, callback) {
            if(contact.id) {
                //Modification d'un nouveau contact
                $http
                    .put('/rest/contacts/' + contact.id, contact)
                    .success(
                        function() {
                            callback();
                        }
                    )
                    .error(
                        function () {
                            callback("Error");
                        }
                    );
            } else {
                //Création d'un nouveau contact
                $http
                    .post('/rest/contacts/', contact)
                    .success(
                        function() {
                            callback(null);
                        }
                    )
                    .error(
                        function () {
                            callback("Error");
                        }
                    );
            }
        }
        //return instance;
});