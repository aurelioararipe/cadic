angular.module('projetocadic').controller('MunicipiosController', function($scope, $http) {
	
	$scope.municipios = [
		{
			nome: 'CidadeAcre1',
			idEstado: '1',
			idMunicipio: '1'
		},
		{
			nome: 'CidadeAcre2',
			idEstado: '1',
			idMunicipio: '2'
		},
		{
			nome: 'CidadeBahia1',
			idEstado: '3',
			idMunicipio: '1'
		},
		{
			nome: 'Paracuru',
			idEstado: '4',
			idMunicipio: '1'
		},
		{
			nome: 'Fortaleza',
			idEstado: '4',
			idMunicipio: '2'
		},
		{
			nome: 'Aquiraz',
			idEstado: '4',
			idMunicipio: '3'
		}
	];


	/* Código para receber json de municipios desta api, não deu certo

	$scope.estados = function (){

		$http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo')
		.success(function(retorno) {
			console.log(retorno);
			return retorno; 
		})
		.error(function(erro) {
			console.log(erro);
		});
	}

	*/
});
