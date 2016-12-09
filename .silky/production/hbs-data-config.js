module.exports = {

  //页面配置的数据引用变量映射
  urlMap: {
    server: ""
  },
  //提供http head头，用于一些接口校验
  headers:{
    "private": "123456"
  },
  queryParams:{
    abc: 123
  },
  
  //global全局变量
  global:{
    "globalVar": "this is global var"
  },
  //全局变量在编译页面时的挂载点
  globalRoot: "__global",
  formatPageData: (url, context)=>{return context}
}