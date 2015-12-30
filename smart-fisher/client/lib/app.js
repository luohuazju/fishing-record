//load the modules
angular.module('smartfisher',[
	'angular-meteor', 
	'ui.router', 
	'accounts.ui'
	]);



function onReady(){
	angular.bootstrap(document, ["smartfisher"]);
}

if(Meteor.isCordova){
	angular.element(document).on("deviceready", onReady);
}else{
	angular.element(document).ready(onReady);
}


