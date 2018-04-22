// 项目的公共方法

// 正则
let regular = {
     isPoneAvailable: function(str) {  
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test(str)) {  
            return false;  
        } else {  
            return true;  
        }  
    }  
}


// 对象拷贝方法
function copyObject(obj1) {
    let obj2 = {};
    for(let key in obj1){
      obj2[key] = obj1[key];
    }
    return obj2;
  }