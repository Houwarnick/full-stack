var app = angular.module('full-stack');

app.service('fullStackService', function($http, $q){
	this.getData = function(whichData){
		var d = $q.defer();
		$http({
			method: 'GET',
			url: whichData
		}).success(function(data){
			d.resolve(data)
		});
		  	return d.promise;
	}

	this.setHobby = function(newData){
		var d = $q.defer();
		$http({
			method: 'POST',
			data: {hobby: newData},
			url: 'http://localhost:8989/hobbies'
		}).success(function(data){
			d.resolve(data)
		});
		  	return d.promise;
	}

	this.setFamily = function (famName, famAge, famRelation){
		var d = $q.defer();
		$http({
			method: 'POST',
			data: {name: famName, age: famAge, relation: famRelation},
			url: 'http://localhost:8989/family'
		}).success(function(data){
			d.resolve(data)
		});
			return d.promise;
	}
	this.setFriends = function (friName, friAge, friMet){
		var d = $q.defer();
		$http({
			method: 'POST',
			data: {name: friName, age: friAge, met: friMet},
			url: 'http://localhost:8989/friends'
		}).success(function(data){
			d.resolve(data)
		});
			return d.promise;
	}
})