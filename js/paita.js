
//  获取点击的文字

var arr = document.querySelector('.index9');
// console.log(arr);
var meng = document.querySelector('.meng');
//  要展示的内容
var nav = document.querySelector('.nav');
// 给用户头像添加点击事件
arr.addEventListener('click', function () {
    // 展示遮罩
    meng.style.display = 'block';
    nav.style.display = 'block';
    // 滑出侧边栏
    nav.style.top = '0';
}, false);
// 给遮罩添加点击事件
meng.addEventListener('click', function () {
    // 隐藏遮罩
    meng.style.display = 'none';
    // 隐藏侧边栏
    nav.style.top = '-800px';
}, false);



// 排他法

var a1 = document.getElementsByTagName('a');
console.log(a1);

var pai1 = document.getElementsByClassName('pai1');
console.log(pai1);
for (var i = 0; i < a1.length; i++) {
    // 此时 每一个a 标签 对应有一个下标 0 1
    a1[i].setAttribute('index', i);

    // 当前a被点击时
    a1[i].onclick = function () {
        //拿到被点击a的index 值 0  或者1 
        var index = this.getAttribute('index');
        console.log(index);
        // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
        // for (var j = 0; j < a.length; j++) {
        //     a[j].className = '';
        //     a[index].className = 'active';
        // }

        // 再次使用排他法  把对应a 对应的html进行显示隐藏
        for (var k = 0; k < pai1.length; k++) {
            pai1[k].style.display = 'none';
            pai1[index].style.display = 'block';
        }
    }
}
