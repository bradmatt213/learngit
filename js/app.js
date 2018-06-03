var myApp = angular.module('myApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angularFileUpload']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    // 需要加载的文件
    $urlRouterProvider.otherwise('main');
    $stateProvider
        .state('article', {
                url: '/articleList1',
                templateUrl: 'article.html',
                controller: 'article'
            }
        )
        .state('image',
            {
                url: '/helloa/:id',
                templateUrl: 'tasl6-image.html',
                controller: 'image'
            })
        .state('login',
            {
                url: '/login',
                templateUrl: 'login.html'
            }
        )
        .state('home',
            {
                url: '/home/:page/:startAt/:endAt/:type/:status/:size',
                templateUrl: 'article.html',
                controller: 'article'
            })
});
myApp.controller('article',function ($rootScope, $scope, $http, $state, $stateParams, $log, selected, request) {
    $scope.date = "";
    $scope.todate = "";
    $scope.goedit = function () {
        var id = this.x.id;
        $state.go("image", {
            id:id
        }, {})
    };
    $scope.upload = function () {
        bootbox.setLocale("zh_CN");
        $log.log(this);
        var id = this.x.id;
        if (this.x.status === 1) {
            bootbox.confirm({
                size: 'medium',
                title: '操作提示',
                message: '<div>上线后该图片将在轮播图中显示</div>' +
                '<p>是否执行上线操作</p>',
                buttons: {
                    confirm: {
                        label: '确认',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: '取消',
                        className: 'btn-danger'
                    }

                },
                callback: function (result) {
                    if (result) {
                        request.articlePut(id, 2).then(
                            function (data) {
                                if (data.data.code === 0) {
                                    $log.log(data);
                                    $state.go($state.current, {}, {
                                        reload: true
                                    });
                                    bootbox.alert('上线成功');
                                }
                            }
                        )

                    }
                }
            })
        } else {
            bootbox.confirm({
                size: 'medium',
                title: '操作提示',
                message: '<div>下线后该图片将不展示在轮播banner中</div>' +
                '<p>是否执行下线操作</p>',
                buttons: {
                    confirm: {
                        label: '确认',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: '取消',
                        className: 'btn-danger'
                    }

                },
                callback: function (result) {
                    if (result) {
                        request.articlePut(id, 1).then(
                            function (data) {
                                if (data.data.code === 0) {
                                    $state.go($state.current, {}, {
                                        reload: true
                                    });
                                    bootbox.alert('下线成功');
                                }
                            }
                        )

                    }
                }
            })
        }

    };
    $scope.delete = function () {
        bootbox.setLocale("zh_CN");
        var id = this.x.id;
        bootbox.confirm({
            size: 'medium',
            title: '提示',
            message: '是否确认删除',
            buttons: {
                confirm: {
                    label: '确认',
                    className: 'btn-primary'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-warning'
                }

            },
            callback: function (result) {
                if (result) {
                    request.articleDelete(id).then(
                        function (data) {
                            if (data.data.code === 0) {
                                $log.log(data);
                                $state.go($state.current), {}, {
                                    reload: true
                                };
                                bootbox.alert("删除成功")
                            }
                        }
                    )
                }
            }

        })
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
    $scope.params = {
        page: $stateParams.page,
        status: $stateParams.status,
        type: $stateParams.type,
        startAt: $stateParams.startAt,
        endAt: $stateParams.endAt
    };
    $log.log($scope.params);
    $scope.params.size = ($stateParams.size) ? $stateParams.size : 10;
    request.articleList($scope.params).then(
        function (data) {
            $scope.list = data.data.data.articleList;
            $scope.totalItems = data.data.data.total;
            $scope.params.size = ($stateParams.size) ? $stateParams.size : 10;
            $scope.currentPage = $stateParams.page;
            $scope.type = $stateParams.type;
            $scope.status = $stateParams.status;
            if (typeof($stateParams.startAt) != "undefined") {
                $scope.date = parseInt($stateParams.startAt);
            }
            if (typeof($stateParams.endAt) != "undefined") {
                $scope.todate = parseInt($stateParams.endAt);
            }
        }
    );
    $scope.search = function () {
        var date, dateend;
        if ($scope.date) {
            date = $scope.date.valueOf();
        }
        if ($scope.todate) {
            dateend = $scope.todate.valueOf();
        }
        $state.go("home", {
            size: $scope.params.size,
            page: $scope.currentPage,
            status: $scope.status,
            type: $scope.type,
            startAt: date,
            endAt: dateend
        }, {
            reload: true
        });
    };
});
myApp.controller('image', function ($rootScope, $scope, $http, $state, $log, $stateParams, FileUploader, request) {

    $log.log($stateParams);
    if ($stateParams.id) {
        $scope.articlename = "编辑article";
        var id = $stateParams.id;
        request.articleSingle(id).then(
            function (data) {
                $log.log(data);
                $scope.params = data.data.data.article;
                var content = $scope.params.content;
                $("#content").html(content);
                $scope.params.type = $scope.params.type.toString();
                $scope.img_view = $scope.params.img;
            }
        );
        $scope.upload = function () {
            $scope.params.status = 2;
            $scope.params.img = $scope.img_view;
            $scope.params.content = editor1.txt.text();
            request.articleEdit(id,$scope.params).then(
                function (data) {
                    bootbox.alert("新增成功");
                    $state.go('article');
                }
            )

        };
        $scope.save = function () {
            $scope.params.status = 1;
            $scope.params.img = $scope.img_view;
            $scope.params.content = editor1.txt.text();
            request.articleEdit(id,$scope.params).then(
                function (data) {
                    bootbox.alert("新增成功");
                    $state.go('article');
                }
            )

        }
    } else {
        $scope.articlename = "新增article";
        $scope.upload = function () {
            $scope.params.status = 2;
            $scope.params.img = $scope.img_view;
            $scope.params.content = editor1.txt.text();
            request.articleNewadd($scope.params).then(
                function (data) {
                    bootbox.alert("新增成功");
                    $state.go('article');
                }
            )

        };
        $scope.save = function () {
            $scope.params.status = 1;
            $scope.params.img = $scope.img_view;
            $scope.params.content = editor1.txt.text();
            request.articleNewadd($scope.params).then(
                function (data) {
                    bootbox.alert("新增成功");
                    $state.go('article');
                }
            )

        }
    }


    var uploader = $scope.uploader = new FileUploader({
        url: '/carrots-admin-ajax/a/u/img/task'
    });
    uploader.onSuccessItem = function (fileItem, rsp, status, headers) {
        console.info('onSuccessItem', fileItem, rsp, status, headers);
        $scope.src = rsp.data.url;
        $scope.img_view = $scope.src;
    };
});

