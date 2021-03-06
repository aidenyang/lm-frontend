'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('DataFactory', ['$http', function($http){

  	var DataFactory = {};

  	DataFactory.getAllLinks = function() {
  		return $http.get('http://link-manager.herokuapp.com/links');
  	};

  	DataFactory.getLinkById = function(id) {
  		return $http.get('http://link-manager.herokuapp.com/links/' + id);
  	};

  	DataFactory.deleteLink = function(id) {
  		return $http.delete('http://link-manager.herokuapp.com/links/' + id);
  	}

  	DataFactory.insertLink = function(author, title, url) {

  		var data = {
  			author: author,
  			title: title,
  			url: url,
  			type: 1
  		}
  		return $http.post('http://link-manager.herokuapp.com/links', data);
  	};
  	return DataFactory;
  }]);
