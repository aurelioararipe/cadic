angular.module('projetocadic').controller('EMController', function($scope, $http) {

	$scope.estadoSelecionado = {};
	$scope.municipioSelecionado = {};

	$scope.estados = [];

	$scope.municipios = [
		{
			nome: 'CidadeAcre1',
			nomeEstado: 'Acre'
		},
		{
			nome: 'CidadeAcre2',
			nomeEstado: 'Acre'
		},
		{
			nome: 'CidadeBahia1',
			nomeEstado: 'Bahia'
		},
		{
			nome: 'CidadeAlagoas1',
			nomeEstado: 'Alagoas'
		},
		{
			nome: 'Paracuru',
			nomeEstado: 'Ceará'
		},
		{
			nome: 'Fortaleza',
			nomeEstado: 'Ceará'
		},
		{
			nome: 'Aquiraz',
			nomeEstado: 'Ceará'
		}
	];

	//Código para receber json de estados desta api

	$http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
	    .then(function(response) {
	    	console.log(response.data);
	        $scope.estados = response.data.geonames;
	        console.log($scope.estados);
	        
	    });

    /* GET MUNICIPIOS
    $http.get("https://github.com/felipefdl/cidades-estados-brasil-json/blob/master/Cidades.json")
	    .then(function(response) {
	    	console.log(response.data);
	        $scope.municipios = response.data.geonames;
	        
	    });
	*/

	$scope.showSelectValueEstado = function(mySelect) {
		//Função que recebe o objeto selecionado da view  e exibe qual opção deverá ser filtrada no select municipios
	    
	    var leng = $scope.estados.length;
	    for(cont=0; cont<leng; cont++){

	    	if (mySelect == $scope.estados[cont].name) {
	    		estadoSelecionado = $scope.estados[cont];

	    		return estadoSelecionado;
	    	}
	    }
	}

	$scope.showSelectValueMunicipio = function(mySelect) {
		//Função que recebe o objeto selecionado da view  e exibe qual opção deverá ser filtrada no select municipios
	    
	    var leng = $scope.municipios.length;
	    for(cont=0; cont<leng; cont++){

	    	if (mySelect == $scope.municipios[cont].nome) {
	    		municipioSelecionado = $scope.municipios[cont];
	    		console.log(municipioSelecionado);

	    		/*console.log(ol.Map.view.zoom);
	    		setZoom(6);*/
	    	}
	    }
	}

});


