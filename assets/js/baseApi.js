$.ajaxPrefilter(function (options) {
    //
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    console.log(options);

    // 1.3 统一为有权限的接口设置`headers`请求头
    // 统一为有权限的接口，设置 headers 请求头

    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
});



