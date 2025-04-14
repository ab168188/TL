var content='';

// 通过类名'banner-info'获取div元素
var bannerDiv = document.querySelector('.banner-info');

// 检查是否找到了该元素
if (bannerDiv) {
    // 查找h1标签下的span元素
    var spanElement = bannerDiv.querySelector('h1 > span');
    
    // 检查是否找到了span元素
    if (spanElement) {
        // 获取span元素的文本内容
         content = spanElement.textContent || spanElement.innerText;
     } else {
        
    }
} else {
   content=document.title;
}
 
 
 
        if(window.location.host.includes('kebeikeji.cn')){
  
 document.writeln('应用名称：'+content+ '   版本号：v1.21.0'+ '   济南珂蓓信息科技有限公司高新分公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  鲁ICP备2023043217号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
        if(window.location.host.includes('pbgsfa.cn')){
  
 document.writeln('应用名称：'+content+ '   版本号：v24.11.3'+ '   台州爱唛网络科技有限公司新乡分公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="./ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  浙ICP备2021039562号-3 <a href="./yszc.html" target="_blank">隐私政策</a> | <a href="./yhqx.html" target="_blank">用户权限</a>');

 }
 
         if(window.location.host.includes('cqjsiao.cn')){
  
 document.writeln('应用名称：'+content+ '   版本号：v1.21.0'+ '   义乌市赫赤教育科技有限公司成都分公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  浙ICP备2023020360号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
          if(window.location.host.includes('cdslxjy')){
  
  document.writeln('应用名称：'+content+ '   版本号：v1.21.0'+ '   成都胜蓝侠教育咨询有限公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  蜀ICP备2024054499号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }