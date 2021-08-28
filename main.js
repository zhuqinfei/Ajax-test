myButton.addEventListener('click',(e)=>{
  let request=new XMLHttpRequest()
  request.open('get','http://jack.com:8002/xxx')  //新增请求网址
  request.send()
  request.onreadystatechange=()=>{
    console.log(request.readyState)
    if(request.readyState === 4){
      console.log('请求响应都完毕了')
      console.log(request.status)
      if(request.status>=200 && request.status<300){
         console.log('说明请求成功')
         console.log(typeof request.responseText)
         console.log(request.responseText)
         let string = request.responseText
         //符合JSON语法的字符串转换成JS对应的值
         let object = window.JSON.parse(string) 
         // JSON.parse 是浏览器提供的
         console.log(typeof object)
         console.log(object)
         console.log('object.note')
         console.log(object.note) 
      }else if(request.status>=400){
         console.log('说明请求失败') 
      }

    }
  }
})
