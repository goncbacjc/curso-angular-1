(function() {
	'use strict';
	angular.module('adivinarNumeroApp', [])
	.controller('NumeroController', NumeroController);
	function NumeroController($scope, $filter) 
	{

		$scope.verificarNumero = function()
		{
			$scope.guess = $filter("number")($scope.guess, 0);
			console.log($scope.guess);
			$scope.desviacion = $scope.original - $scope.guess;
			$scope.intentos = $scope.intentos + 1;
		}
		$scope.iniciarJuego = function()
		{
			$scope.intentos = 0;
			$scope.original = Math.floor((Math.random()*1000)+1);
			$scope.guess = null;
			$scope.desviation = null;
		}
		$scope.iniciarJuego();
	}
		
	})();