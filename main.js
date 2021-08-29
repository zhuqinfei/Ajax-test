window.jQuery=function(nodeOrSelector){
   let nodes={}
   nodes.addclass=function(){}
   nodes.html=function(){}
   return nodes
}

window.jQuery.ajax=function(url,method,body,successFn,failFn){
  let request=new XMLHttpRequest()
  request.open(method,url)  //新增请求网址
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

myButton.addEventListener('click',(e)=>{
  window.jQuery.ajax(
    '/xxx',
    'post',
    'a=1&b=2',
    (responseText)=>{console.log(1)},
    (request)=>{console.log(2)}
  )
})
