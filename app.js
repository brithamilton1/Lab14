var app = angular.module("test", []);
app.controller("AppCtrl", function ($scope){
  $scope.projects =[
    {name: "project 1", image: "https://yt3.ggpht.com/EdjnobpzppDl5pSVU2s2AUIiFS0qBfT8Jdodw-FHMhugJK5zmzWDLkpqDVtpnaLSP66M5F8nqINImLKGtQ=s900-nd-c-c0xffffffff-rj-k-no", date: "06.23.2017", collaborators: null, caption: "Caption This"},
    {name: "project 2", image: "http://placehold.it/200X200", date: "07.31.2017", collaborators: "Jessica", caption: "Caption This"},
    {name: "project 3", image: "http://placehold.it/200X200", date: "08.03.2017", collaborators: "Brittany and Jessica", caption: "Caption This"}
  ]
});

app.directive("isoScope", function (){
  return{
    scope: {
      project: "="
    },
    //this scope object makes it IsoScope
   templateUrl:"project.html",
   restrict: "E",
   link: function(scope, elem, attrs) {
    elem.on("click", function(){
    alert(scope.project.caption);
    })
  }
}
})




