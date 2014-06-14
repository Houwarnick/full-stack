var family = [{name:'Mark', age:72, relation:'dad'},
			  {name:'Ginger', age:54, relation:'mom'},
			  {name:'Tyler', age:35, relation:'brother'},
			  {name:'Michelle', age:28, relation:'wife'}];

var friends = [{name:'Justin', age:28, met:'5th Grade'},
				{name:'Sam B', age:26, met:'Highschool'},
				{name:'Sam A', age:27, met:'Some BBQ in college'}];	  

var hobbies = ['Computers','Games','NBA', 'Movies'];

var me = {name: 'Houston', height:'5ft10in', age:'29', favMovie:'Kung Fu Hustle', favArtist:'Jack White', favFood:'The Pie'}

//getters
module.exports.getFamily = function (){
	return friends;
}

module.exports.getFriends = function (){
	return family;
}

module.exports.getHobbies = function (){
	return hobbies;
}

module.exports.getMe = function (){
	return me;
}

//setters
module.exports.addFamily = function(newFamily){
	family.push(newFamily);
}

module.exports.addFriends = function(newFriend){
	family.push(newFriend);
}

module.exports.addHobby = function(newHobby){
	family.push(newHobby);
}

module.exports.addMe = function(newMe){
	family.push(newMe);
}