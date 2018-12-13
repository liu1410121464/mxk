// jsonp只适用于get请求

function sendJsonp(url, data) {
    var $script = document.createElement('script');
    var flag = url.indexOf('?') == -1 ? '?' : '&';
    url += flag;

    if(typeof data == "object") {
        for(var i in data) {
            url += `${i}=${data[i]}` + '&';
        }
    }
    url += '_=' + Date.now();
    $script.src = url;
    document.body.appendChild($script);


}