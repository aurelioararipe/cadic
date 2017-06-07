angular.module('minhasDiretivas', [])
    .directive('botaoEstado', function() {
        
        var ddo = {}; //diretiva de definição do objeto

        ddo.restrict = "AE"; //tag ou elemento

        // lista de botões para seleção de um estado
        ddo.template = '<select value="Estados" ng-model="mySelect" ng-change="showSelectValue(mySelect)">'
						+   '<option ng-repeat="estado in estados">'
						+		'{{estado.nome}}'
						+	'</option>'
						+'</select>'

        /*'<div class="btn-group">'
						+  '<button type="button" class="btn btn-primary">Estado</button>'
						+  '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">'
						+    '<span class="caret"></span>'
						+  '</button>'
						+  '<ul class="dropdown-menu" role="menu">'
						+		'<li ng-repeat="estado in estados">'
						+           '<a href="#">{{estado.nome}}</a>'
						+        '</li>'
						+  '</ul>'

						+'</div>'*/
	
					

        return ddo;
    })
    .directive('botaoMunicipio', function() {
        
        var ddo = {};

        ddo.restrict = "AE"; 

        // lista de botões para seleção de um municipio
        ddo.template = '<select ng-model="mySelect" ng-change="showSelectValue(mySelect)">'
						+   '<option ng-repeat="municipio in municipios">'
						+		'{{municipio.nome}}'
						+	'</option>'
						+'</select>'


        /*'<div class="btn-group">'
						+  '<button type="button" class="btn btn-primary" >Municipio</button>'
						+  '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">'
						+    '<span class="caret"></span>'
						+  '</button>'
						+  '<ul class="dropdown-menu" role="menu">'
						+		'<li ng-repeat="municipio in municipios | filter: estadoSelecionado()">'
						+           '<a href="#">{{municipio.nome}}</a>'
						+        '</li>'
						+  '</ul>'

						+'</div>'*/
	
					

        return ddo;
    });