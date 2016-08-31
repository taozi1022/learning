/*------------获取id,class,tagName-----------------*/
function $(select,context){
	context = context || document;
	var firstChar = select.charAt(0);//将传过来的参数赋给firstChar
	//进行判断
	if( firstChar === "#" ){//如果第一位字符是#号,说明传进来的时id
		return document.getElementById(select.substring(1));//从传过来的第一个字符开始算起
	}else if( firstChar === "." ){
		return context.getElementsByClassName(select.substring(1));//获取class
	}else{
		return context.getElementsByTagName(select);//获取标签名
	}
}



//获取计算后的样式
function getStyle(obj,attr){
    return getComputedStyle(obj)[attr];   
}