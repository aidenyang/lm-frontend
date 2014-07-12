'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'DataFactory', function($scope, DataFactory) {

  	// hide insert form
  	$scope.showForm = false;
  	$scope.showButton = true;

  	$scope.status;
  	$scope.links; 
  	getAllLinks();

  	function getAllLinks() {
  		DataFactory.getAllLinks()
  		.success(function (data) {
  			$scope.links = data.items;
  			$scope.status = "Fetched all links.";
  		}).
  		error(function() {
  			$scope.status = "Unable to fetch links. Please try again later.";
  		});
  	};

  	// $scope.getLinkById = function(id) {
  	// 	DataFactory.getLinkById(id)
  	// 	.success(function (data)) {

  	// 	};
  	// };

  	$scope.insertLink = function(author, title, url) {
  		DataFactory.insertLink(author, title, url)
  		.success(function (data){
  			$scope.status = "Successfully added the link.";
  		})
  		.error(function (data) {
  			$scope.status = "Sorry, we couldn't add your link at this time. Please try again later.";
  		});
  	}

  	$scope.deleteLink = function(id) {
  		DataFactory.deleteLink(id) 
  		.success(function (data) {
  			for (var i = 0; i < $scope.links.length; i++) {
  				if ($scope.links[i].id == id) {
  					$scope.links.splice(i, 1);
  					break;
  				}
  			}
  			$scope.status = "Successfully deleted link with id " + id;
  		})
  		.error(function (data) {
  			$scope.status = "Could not delete link with id " + id;
  		});
  	};

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
