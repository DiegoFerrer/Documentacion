/* La diferencia entre un factory y un service es que el service se comporta como una clase o un constructor
donde se utiliza el this. a partir de este se instancia un objeto de este servicio. */

angular.module('ToDoList',['LocalStorageModule'])
.service('ToDoService',function(localStorageService){

	this.key = 'angular-todolist'

	if (localStorageService.get(this.key)) {
		this.activities = localStorageService.get(this.key)
	}else{
		this.activities = [];		
	}	

	this.add = function(newActv){
		this.activities.push(newActv)
		this.updaLocalStorage();

	};
	this.updaLocalStorage = function(){
		localStorageService.set(this.key,this.activities)
	}
	this.clean = function(){
		this.activities = [];
		this.updaLocalStorage();
		return this.getAll()
	}
	this.getAll = function(){
		return this.activities
	}
	this.removeItem = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updaLocalStorage();
		return this.getAll();
	}
});

/* Con el servicio creado se injecta en el controller para
utilizar sus metodos */ 
.controller('ToDoController',function($scope,this){

	$scope.todo = ToDoService.getAll()
	$scope.newActv = {}

	$scope.addActv = function(){
		ToDoService.add($scope.newActv)
		$scope.newActv = {};
	};
	$scope.removeActv = function(item){
		$scope.todo = ToDoService.removeItem(item)
	}
	$scope.clean = function(){
		$scope.todo = ToDoService.clean()
	}

})