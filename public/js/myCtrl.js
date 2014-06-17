var app = angular.module('full-stack');

  app.controller('myCtrl',function($scope, fullStackService){
    $scope.test = 'soccer is boring';
    $scope.family = [];
    $scope.friends = [];
    $scope.hobbies = [];
    $scope.me = {};
    $scope.newHobby = '';
    $scope.famName = '';
    $scope.famAge = '';
    $scope.famRelation = '';
    $scope.friAge = '';
    $scope.friName = '';
    $scope.friMet = '';

    
    $scope.getData = function(whichData){
       fullStackService.getData(whichData)
       	.then(function(data){
       		console.log(whichData);
       		if(whichData === 'http://localhost:8989/family'){
              $scope.family = data;
              console.log('in family');
       		}
       		else if(whichData === 'http://localhost:8989/friends'){
              $scope.friends = data;
              console.log('in friends');
       		}
       		else if(whichData === 'http://localhost:8989/hobbies'){
       		  $scope.hobbies = data;
       		  console.log('in hobbies');
       		}
       		else if(whichData ==='http://localhost:8989/me'){
       		  $scope.me = data;
       		  console.log('in me');
       		}
       	})
    }


    $scope.setHobby = function(){
    	 fullStackService.setHobby($scope.newHobby)
    }   
    $scope.setFamily = function(){
      fullStackService.setFamily($scope.famName, $scope.famAge, $scope.famRelation)
    }
    $scope.setFriends = function (){
      fullStackService.setFriends($scope.friName, $scope.friAge, $scope.friAge)
    }



    $scope.clearData = function(){
    $scope.family = [];
    $scope.friends = [];
    $scope.hobbies = [];
    $scope.me = {};
    }

  });