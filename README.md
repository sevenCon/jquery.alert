# jquery.alert
一个简单的dialog插件.

### 默认参数：
    title:"",
    content:"",
    autoClose: false,
    sizeType: "md" ,
    type:"annotation"
   
### 可选参数
    
    title: ""
    content: ""
    height: 200p
    width: 200px
    
    sizeType: sm | md | lg | auto   // 如果有sizeType大小配置，则以sizeType为准
    type: tips | warning | error    // 不同的提示，icon，文字，会不一样
    autoCloes: false | true         // 自动关闭
    
    cancel:function(){}   // 取消按钮的回调
    certain:function(){}  // 确定按钮的回调
    other:function(){}    // 其他按钮的回调，可自定义
    close:function(){}    // 关闭按钮的回调
    