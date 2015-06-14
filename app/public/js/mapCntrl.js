todoApp.controller('mapCntrl',function($scope,$http){

	$scope.sectionAR = null;
	$scope.sectionIndex = 0;

	$scope.getSectionData = function(){
		$http.get("http://localhost:3000/ws_todo/getActionData").success(function(data){
			$scope.sectionAR = data;
			console.log('Finish');
			console.log($scope.sectionAR);
			

		});
	
	}