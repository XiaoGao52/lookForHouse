var a_ = document.querySelector('header').children[1]
a_.onclick = function () {
    if (sessionStorage.getItem('flg')) {
        window.open('../html/my1.html', '_parent')
    } else {
        window.open('../html/my.html', '_parent')
    }
}