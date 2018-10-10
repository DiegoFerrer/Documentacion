angular.module('ToDoList',['LocalStorageModule'])
.factorty('ToDoService',function(localStorageService){
	let toDoService = {};
	toDoService.key = 'angular-todolist'

	if (localStorageService.get(toDoService.key)) {
		$scope.todo = localStorageService.get(toDoService.key)
	}else{
		toDoService.activities = [];		
	}	

	toDoService.add = function(newActv){
		toDoService.activities.push(newActv)
		toDoService.updaLocalStorage();

	};
	toDoService.updaLocalStorage = function(){
		localStorageService.set(toDoService.key,toDoService.activities)
	}
	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updaLocalStorage();
		return toDoService.getAll()
	}
	toDoService.getAll = function(){
		return toDoService.activities
	}
	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	}


	return toDoService
})

/* Con el servicio creado se injecta en el controller para
utilizar sus metodos */ 
.controller('ToDoController',function($scope,ToDoService){

	$scope.todo = toDoService.getAll()
	$scope.newActv = {}

	$scope.addActv = function(){
		ToDoService.add($scope.newActv)
		$scope.newActv = {};
	};
	$scope.removeActv = function(item){
		$scope.todo = toDoService.removeItem(item)
	}
	$scope.clean = function(){
		$scope.todo = toDoService.clean()
	}

})