// 项目的公共方法

const publics = {
    
    // 文章方法
    articles: {
        test: function() {
            console.log('test');
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

 publics
  