var close_ = document.querySelector('.advertising').children[0]
// console.log(close_);
close_.onclick = function () {
    close_.parentNode.parentNode.removeChild(close_.parentNode)
}