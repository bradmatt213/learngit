myApp.factory('interface', function () {
    return {
        // 获取Article列表接口
        articleList_url: '/carrots-admin-ajax/a/article/search',
        articleList_add: '/carrots-admin-ajax/a/u/article',
        articleList_edit: '/carrots-admin-ajax//a/u/article/',
        articleList_one: '/carrots-admin-ajax/a/article/'
    };
})
    .factory('request', function ($http, interface) {
        return {
            articleList:
                function (params) {
                    return $http({
                        method: 'GET',
                        url: interface.articleList_url,
                        params: params
                    })
                },
            articleNewadd:
                function (params) {
                    return $http({
                        method: 'post',
                        url: interface.articleList_add,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        params: params
                    })
                },
            articleEdit:
                function (id,params) {
                    return $http({
                        method: 'put',
                        url: interface.articleList_edit + id,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        params: params
                    })
                },
            articleSingle:
                function (id) {
                    return $http({
                        method: 'get',
                        url: interface.articleList_one + id
                    })
                },
            articlePut:
                function (id, status) {
                    return $http.put('/carrots-admin-ajax/a/u/article/status?id=' + id + "&status=" + status);
                },
            articleDelete:
                function (id) {
                    return $http.delete('/carrots-admin-ajax/a/u/article/' + id);
                },
            articleOff:
                function () {
                    return $http.post('/carrots-admin-ajax/a/logout');
                }
        };

    });
