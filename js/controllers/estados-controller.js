angular.module('projetocadic').controller('EstadosController', function($scope, $http) {


	$scope.showSelectValue = function(mySelect) {
		//Função que recebe da view o objeto selecionado e exibe qual opção deverá ser filtrada no select municipios
    console.log(mySelect.nome);
}

	$scope.estadoSelecionado = {};

	$scope.estados = [
		{
			nome: 'Acre',
			idFather: '1'
		},
		{
			nome: 'Alagoas',
			idFather: '2'
		},
		{
			nome: 'Bahia',
			idFather: '3'
		},
		{
			nome: 'Ceará',
			idFather: '4'
		}
	];

/*	Código para receber json de estados desta api, não deu certo

	$http.get('http://www.geonames.org/childrenJSON?geonameId=3469034')
    .success(function(retorno) {
        console.log(retorno);
        $scope.estados = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });
*/

});


