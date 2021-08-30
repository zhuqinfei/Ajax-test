window.jQuery=function(nodeOrSelector){
   let nodes={}
   nodes.addclass=function(){}
   nodes.html=function(){}
   return nodes
}

window.jQuery.ajax=function(options){
  // let url=options.url
  // let method=options.method
  // let body=options.body
  // let successFn=options.successFn
  // let failFn=options.failFn
  // let headers=options.headers
  let {url,method,body,successFn,failFn,headers}=options  // ES6 析构赋值

  let request=new XMLHttpRequest()
  request.open(method,url)  
  for(var key in headers){   // //设置多个请求头用for循环
      value=headers[key]
      request.setRequestHeader(key ,value)
  }
  request.onreadystatechange=()=>{
    if(request.readyState === 4){
      if(request.status>=200 && request.status<300){
       successFn.call(undefined,request.responseText) 
      }else if(request.status>=400){
       failFn.call(undefined,request) 
      }
    }
  }
  request.send(body)
}
window.$=window.jQuery

 function f1(responseText){} 
 function f2(responseText){}

myButton.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    headers:{   //设置多个请求头
      'Content-Type':'application/x-www-form-urlencoded',
      'fei':'18'
    },
    successFn:(x)=>{
      f1.call(undefined,x) 
      f2.call(undefined,x)
    },
    failFn:(x)=>{console.log(x)},
  })
})
