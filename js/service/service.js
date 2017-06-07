angular.module('projetocadic').service('meusEstados', function($http){


			$http({
                method: 'GET',
                url: 'http://api.geonames.org/children?geonameId=3175395&username=demo'
            }).then( 
                function success(response){
                    console.log(response.data);
                
            },
                function error(){
                    console.log('error on the user request!');
                }
            );


/*
	var url = 'http://www.geonames.org/childrenJSON?geonameId=3469034';

	código victor
	$http({
		method: 'GET',
		url: url
	}).then(
		function success(response){
			console.log(response.data);
		},
		function error(){
			console.log('error on the state request!');
		}
	); fim código victor


*/





});


/*	código Aurelio
	return {
		obterEstados : function(){
			return $http.GET(url).then(function(response){
				console.log(response.data);
				return response.data;
			});
		}
	} fim código Aurelio
	*/



/* outro código de teste aluracar
	$scope.receberEstados = function(){
		$scope.state = $scope.geonames;
		$http({
			method: 'GET',
			url: 'http://www.geonames.org/childrenJSON?geonameId=3469034'
		}).then(
			function success(response){
				console.log(response.data);
			},
			function error(){
				console.log('error on the state request');
			}
		);
	} fim do outro código
*/