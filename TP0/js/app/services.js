'use strict';

var zenContactServices = angular.module('zenContactServices', []); // Module correspondant à la couche service (découplage de l'application pour futur tests)

//zenContactServices.factory('contactService', function($http) { // déclaration du service contactService responsable de la gestion des contacts
zenContactServices.service('contactService', function($http) { // déclaration du service contactService responsable de la gestion des contacts
        //var instance = {};
        //instance.getAllContacts = function(callback) {
        this.getAllContacts = function(callback) {
/*
            // Le service $http propose une API simplifiée
            $http
                .get('/rest/contacts')
*/
            // Le service $htp peut prendre en paramètre une map de configuration
            $http({ method: 'GET',
                    url:    '/rest/contacts',
                    params: { 'val1': 'un',
                              'val2': 'deux'
                            },
                    headers:    { 'Accept': 'text/html',
                                  'Accept-Language': 'fr',
                                  'Accept-Encoding': 'gzip'}
                 })
                .success(
                    function(data, status, headers, config) {
                        console.log("data:", data);
                        console.log("status:", status);
                        console.log("headers:", headers('etag'));
                        console.log("config:", config);
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
/*
            $http
                .get('/rest/contacts/' + idParam)
*/
            $http({ method: 'GET',
                    url:    '/rest/contacts/' + idParam,
                    params: { 'val1': 'un' }
                 })
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
/*
                $http
                    .put('/rest/contacts/' + contact.id, contact)
*/
                $http({ method: 'PUT',
                        url:    '/rest/contacts/' + contact.id,
                        data:   contact
                     })
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
/*
                $http
                    .post('/rest/contacts/', contact)
*/
                $http({ method: 'POST',
                        url:    '/rest/contacts/',
                        data:   contact
                     })
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