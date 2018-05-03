var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider) {
    $stateProvider.state(
        {
            name: 'article',
            url: '/helloa',
            templateUrl: 'task6-article.html'
        }
    ).state(
        {
            name: 'image',
            url: '/helloa',
            templateUrl: 'tasl6-image.html'
        }
    )
});
myApp.controller("list", function ($scope, $http) {
    $scope.article = function () {
        $http({
            method: 'GET',
            url: "/carrots-admin-ajax/a/article/search"
        }).then(function (data) {
            $scope.articleList = data.data.data.articleList;
            console.log($scope.articleList);
        })
    };
});
