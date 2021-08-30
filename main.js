window.jQuery=function(nodeOrSelector){
   let nodes={}
   nodes.addclass=function(){}
   nodes.html=function(){}
   return nodes
}
window.$=window.jQuery

window.jQuery.ajax=function({url,method,body,headers}){
  //成功和失败不用作为参数传进来，这里用resolve和reject统一化
  //Ajax的promise返回return一般写在最上面，包裹着要执行的代码
   return new Promise(function(resolve,reject){ //new 后面接大写
     let request=new XMLHttpRequest()
     request.open(method,url)  
     for(var key in headers){   
         value=headers[key]
         request.setRequestHeader(key ,value)
      }
      request.onreadystatechange=()=>{
       if(request.readyState === 4){
          if(request.status>=200 && request.status<300){
          resolve.call(undefined,request.responseText) 
         }else if(request.status>=400){
          reject.call(undefined,request) 
         }
       }
     }
     request.send(body)
    })
}

 function f1(responseText){} 
 function f2(responseText){}

myButton.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    headers:{   
      'Content-Type':'application/x-www-form-urlencoded',
      'fei':'18'
    },
  }).then(  //然后，成功调第一个函数，失败调第二个函数
    (text)=>{console.log(text)},
    (request)=>{console.log(request)}
  )
})
