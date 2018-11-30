function sentAjax(url, obj){
	const xhr = new XMLHttpRequest();
	const _default = {
		method:'GET',
		data:null,
		success:undefined
	}
	for(var key in _default){
		if(key in obj){
			_default[key] = obj[key];
		}
	}
	_default.method = _default.method.toUpperCase();
	if(_default.method == 'GET'){
		let flag = url.indexOf('?') == -1 ? '?' : '&';
		url += flag;
		console.log(url);
		for(var i in _default.data){
			let keyValue = `${i}=${_default.data[i]}`;
			console.log(keyValue);
			url += keyValue + '&';
			console.log(url);
		}
		url += `_=${Date.now()}`;//时间戳
		_default.data = null;
	}else if(_default.method == 'POST'){
		_default.data = JSON.stringify(_default.data);
		console.log(_default.data);
	}else{
		console.log('告辞');
		return;
	}
	xhr.open(_default.method, url,true);
	xhr.send(_default.data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
		  	 		let data = xhr.response;
		  	 		if(typeof _default.success=='function'){
		  	 			_default.success(data);
		  	 		}
		  	 	}
		  }
}
