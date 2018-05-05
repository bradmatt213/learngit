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
myApp.filter('typeFilter',function() {
    return function (type) {
        switch (type) {
            case 1:
                return "找职位Banner";
            case 3:
                return "行业大图";
            case 0:
                return "首页Banner";
            case 2:
                return "找精英Banner";
        }
    }
})
        .filter("updatefilter",function () {
            return function (status) {
                switch (status) {
                    case 1:
                        return "草稿";
                    case 2:
                        return "上线";
                }
            }
        })