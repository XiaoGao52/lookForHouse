// var a_ = document.querySelector('header').children[0].children[0];
var a_ = document.querySelector('.a1')
console.log(a_);
a_.onclick = function () {
    if (sessionStorage.getItem('flg')) {
        window.location.href = '../html/my1.html'
    } else {
        alert('您还未登陆')
    }
}
// var a1_ = document.querySelector('.box1').children[1];
// a1_.onclick = function () {
//     window.location.href = '../html/login.html'
// }