var box2_ = document.querySelector('.box2');
var a_ = box2_.children;
var box3_ = document.querySelectorAll('.box3')
console.log(box3_);
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