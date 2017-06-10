angular.module('minhasDiretivas', [])
    .directive('botaoEstado', function() {
        
        var ddo = {}; //diretiva de definição do objeto

        ddo.restrict = "AE"; //tag ou elemento

        // lista de botões para seleção de um estado
        ddo.template = 		'<select class="btn btn-primary" ng-model="estadoSelect" ng-change="showSelectValueEstado(estadoSelect)">'
							+	'<option ng-repeat="estado in estados">'
							+		'{{estado.name}}'
							+	'</option>'
							+'</select>'				

        return ddo;
    })
    .directive('botaoMunicipio', function() {
        
        var ddo = {};

        ddo.restrict = "AE"; 

        // lista de botões para seleção de um municipio
        ddo.template = '<select class="btn btn-primary" ng-model="municipioSelect" ng-change="showSelectValueMunicipio(municipioSelect)">'
						+   '<option ng-repeat="municipio in municipios | filter: showSelectValueEstado(estadoSelect).name">'
						+		'{{municipio.nome}}'
						+	'</option>'
						+'</select>'

        return ddo;
    });