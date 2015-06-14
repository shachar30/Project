todoApp.controller('sectionCntrl',function($scope,$http){

	$scope.sectionAR = null;
	$scope.sectionIndex = 0;

	$scope.getSectionData = function(){
		$http.get("http://localhost:3000/ws_todo/getActionData").success(function(data){
			$scope.sectionAR = data;
			console.log('Finish');
			console.log($scope.sectionAR);
			

		});
	
	}

	$scope.Counter_plus=function(){
		
			$scope.sectionIndex++;

		
			if ($scope.sectionIndex==2) {

				console.log("this is 2 ");
				$scope.Counter_minos();
				
			}

	}

	$scope.Counter_minos=function(){

		
		if($scope.sectionIndex<=0){
			
			alert("Just Up");
			console.log($scope.sectionIndex);
		}
		if ($scope.sectionIndex>0) {

			$scope.sectionIndex--;
		}

	}





	$scope.getSectionData();
	

});