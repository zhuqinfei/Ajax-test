window.jQuery=function(nodeOrSelector){
   let nodes={}
   nodes.addclass=function(){}
   nodes.html=function(){}
   return nodes
}

window.jQuery.ajax=function(options){
  let url=options.url
  let method=options.method
  let body=options.body
  let successFn=options.successFn
  let failFn=options.failFn

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
  window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    //这里用到回调知识callback,这里x实际是指request.responseText
    successFn:(x)=>{console.log(x)},
    //这里用到回调知识callback,这里x实际是指request
    failFn:(x)=>{console.log(x)},
  })
})
