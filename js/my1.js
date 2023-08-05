var box2_ = document.querySelector('.box2').children[1]
if (sessionStorage.getItem('flg')) {
    box2_.innerHTML = sessionStorage.getItem('usname')

}
// var box4_ = querySelector('.box4').children[0];
var box4_ = document.querySelector('.box4').children[0]
console.log(box4_);
box4_.onclick = function () {
    localStorage.removeItem(sessionStorage.getItem('usname'));
    localStorage.removeItem(sessionStorage.getItem('usname') + 'psd');
    sessionStorage.removeItem('usname')
    sessionStorage.removeItem('flg')
    window.location.href = '../html/my.html'
}