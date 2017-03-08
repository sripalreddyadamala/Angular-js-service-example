var myApp = angular.module('myModule',[]);
myApp.service('sampleservice', function ($http,$q) {
    var deferred = $q.defer();
    $http.get('/json/sample.json').then(function(data){
    	deferred.resolve(data);

    });
    this.getPlayers = function(){
    	return deferred.promise;
    }

});
myApp.controller('TodoController',['$scope','$http','sampleservice',function($scope,$http,sampleservice){
	var promise = sampleservice.getPlayers();
	promise.then(function(data){
      $scope.players = data.data;
      console.log($scope.players);
	});
}]);
myApp.directive("buttonDirective", function() {
    return {
    	restrict : "EA",
    	transclude:true,
        template : '<button type="button" class="btn btn-primary btn-lg">'+ 'Primary <ng-transclude></ng-transclude>' + '</button>'
    };
});