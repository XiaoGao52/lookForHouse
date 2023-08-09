var btn = document.querySelector('.box2').children[0].children[0].children[1];
var timer;
var num = 60;
var flg = true;
var inp = document.querySelectorAll('input');
var phone = /^1[3-9]\d{9}$/;
var arry = []
var psd = /^[a-zA-Z0-9]{6,}$/;
btn.onclick = function () {
    arry.splice(0, 1)
    clearInterval(timer)
    if (phone.test(inp[0].value)) {
        timer = setInterval(function () {
            num--;
            btn.innerHTML = num + '秒后重新获取验证码';
            if (flg) {
                arry.push(parseInt(Math.random() * 10000))
                setTimeout(function () {
                    alert('您的验证码为:' + arry);
                }, 1000)
                flg = false;
            }
            if (num == 0) {
                btn.innerHTML = '重新获取验证码'
                num = 60;
                flg = true;

                clearInterval(timer)
            }

        }, 1000);
    } else {
        alert('手机格式输入错误')
    }


}
var btn1_ = document.querySelector('.box3').children[0]
btn1_.onclick = function () {
     if (inp[0].value == localStorage.getItem(inp[0].value)) {
        alert('手机号已经注册')
    } else
    if (arry[0] == inp[1].value && psd.test(inp[2].value)) {
        alert('注册成功，请牢记密码');
        console.log(inp[0]);
        localStorage.setItem(inp[0].value, inp[0].value)
        localStorage.setItem(`${inp[0].value}psd`, inp[2].value)
    } else if (arry[0] != inp[1].value) {
        alert('验证码输入错误')
    } else {
        alert('密码格式错误')
    }
}
