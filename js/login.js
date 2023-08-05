var box2_ = document.querySelector('.box2');
var a_ = box2_.children;
var box3_ = document.querySelectorAll('.box3')
// console.log(box3_);
for (var item of a_) {
    item.onclick = function () {
        for (var i = 0; i < a_.length; i++) {
            a_[i].setAttribute('index', i)
            a_[i].classList.remove('active')
            this.classList.add('active')
        }
        for (var j = 0; j < box3_.length; j++) {
            box3_[j].style.display = 'none'
            box3_[this.getAttribute('index')].style.display = 'block'
        }
    }
}
var btn_ = document.querySelector('.btn')
btn_.onclick = function () {

    if (box3_[0].children[1].value == localStorage.getItem(`${box3_[0].children[0].value}psd`)) {
        window.location.href = '../html/my1.html'
        sessionStorage.setItem('flg', true);
        sessionStorage.setItem('usname', box3_[0].children[0].value)
    } else {
        alert('密码或手机号输入错误')
    }
}
var timer;
var num = 60;
var flg = true;
var arry = []
var btn1_ = document.querySelector('.btn1')
// console.log(btn1_);
var phone = /^1[3-9]\d{9}$/;
var box4_ = document.querySelector('.box4').children[0];
// console.log(box4_);
btn1_.onclick = function () {

    if (phone.test(box4_.value)) {
        timer = setInterval(function () {
            num--;
            btn1_.innerHTML = num + '秒后重新获取验证码';
            if (flg) {
                arry.push(parseInt(Math.random() * 10000))
                setTimeout(function () {
                    alert('您的验证码为:' + arry);
                }, 1000)
                flg = false;
            }
            if (num == 0) {
                btn1_.innerHTML = '重新获取验证码'
                num = 60;
                flg = true;

                clearInterval(timer)
            }

        }, 1000);
    } else {
        alert('手机格式输入错误')
    }

}
var btn3_ = document.querySelectorAll('.btn')[1]
console.log(box4_.nextElementSibling.nextElementSibling);
btn3_.onclick = function () {

    if (box4_.nextElementSibling.nextElementSibling.value == arry[0]) {
        window.location.href = '../html/my1.html'
        localStorage.setItem(box4_.value, box4_.value)
        sessionStorage.setItem('flg', true);
        sessionStorage.setItem('usname', box4_.value)
    } else {
        alert('手机号或者验证码输入错误')
    }
}