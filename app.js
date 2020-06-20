var app = angular.module('plunker', []);

app.controller('LunchCheckController', function($scope) {
  $scope.name = 'World,s,d,f';
  $scope.stat=""
  $scope.colorr=""
  $scope.check=function()
  {
   let arr =$scope.name.split(",")
   let c=0
   let i
   arr.forEach((i)=>
   {
     if(i!=false)
     c++
   });
   if(c<3 && c>0)
   {
    $scope.colorr="green"
return "Enjoy"
   }
    
   else if(c>3)
   {
         $scope.colorr="green"
         return "Too much"

   }
   
   
   else if(c==0)
   {
         $scope.colorr="red"
         return "Please enter data first"


   }

  document.getElementById("d").style.color = $scope.colorr;

   
  }
   
});
