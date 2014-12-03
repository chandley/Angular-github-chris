githubUserSearch.controller('GitUserSearchController', function($scope, $resource){
  $scope.doSearch = function() {
    var searchResource = $resource('https://api.github.com/search/users');

    $scope.searchResult = searchResource.get({
       q: $scope.searchTerm
    
    });
  };
});