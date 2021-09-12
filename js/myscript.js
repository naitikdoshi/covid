const URL = "https://covid19.mathdro.id/api";
//https://covid19.mathdro.id/api
let app = angular.module('MyApp',[])

app.controller('MyCtrl',($scope,$http)=>{

//this is my controller
$scope.title = "Covid Update"

//this is log to check if the controller is running 
console.log("controller is loaded")
//this is my function 

$http.get(URL).then((response)=>{
//success function 
console.log("inside success")
console.log(response)
$scope.all_data = response.data

},(error)=>{
//failure function 
console.log("inside failure")
console.log(error)

})



$scope.get_c_data = ()=>{
    let country = $scope.country
    if (country == "")
    {
        $scope.c_data = undefined
        return;
    }

    $http.get(`${URL}/countries/${country}`).then(
        (response)=>{

        $scope.c_data = response.data
    },
    (error)=>{
        $scope.c_data = undefined
        console.log(error)
    })
    }

})