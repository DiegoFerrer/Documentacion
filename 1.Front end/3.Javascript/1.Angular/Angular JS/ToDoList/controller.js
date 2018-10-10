/* Se crea un modulo el cual importa un modulo creado por otra persona 
para manipular el localStorage, a su vez se le injecta como dependencia
al controller
*/

angular.module('ToDoList',['LocalStorageModule'])
.controller('ToDoController',function($scope,localStorageService){
	if (localStorageService.get('angular-todolist')) {
		$scope.todo = localStorageService.get('angular-todolist')
	}else{
		$scope.todo = [];		
	}
	/*
	Simulacion de como quedaria el array todo para 
	trabajarlo con ng model

		{
			actividad: 'terminar curso blabla',
			fecha: '3-03-24 2:00pm'
		}
	*/

	//-------------------------------------------------------

	/* watchCollection, es un metodo para arrays que observa
	los valores viejos y nuevos es decir los cambios en el codigo
	que le pasemos ,en este caso en el localstorage en la lista todo */
	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set('angular-todolist',$scope.todo)
	})
	/* Agrega el objeto simulado en la vista por el ng model newActv
	al array todo y a su vez vacia el objeto del ng model */
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
	};
	/* borra toda la lista de tareas */
	$scope.clean() = function(){
		$scope.todo = [];
	}
})