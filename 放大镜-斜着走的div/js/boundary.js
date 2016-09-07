/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-20 10:11:02
 * @version $Id$
 */

/*获取可视区的宽高*/
function view(){
	return {
		W: document.documentElement.clientWidth,
		H: document.documentElement.clientHeight
	}
}

/*获取指定元素的所有尺寸*/
/*返回值为对象*/
/*比如要获取box的right值,getRect(box).right*/
/*使用时通常是将这个函数的返回值给了一个声明好的变量*/
function getRect(obj){
	return obj.getBoundingClientRect();
}






