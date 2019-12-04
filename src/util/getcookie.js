//获取cookie
export const getCookie = name=> {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    
    if(arr){
      return(arr[2]);
    }else{
      return null;
    }
  }
  export const setCookie=(name,value)=> 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";domain=122.com;path=/"
    
}
  