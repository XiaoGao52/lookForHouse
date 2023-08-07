var lis = document.getElementsByClassName('lis')
console.log(lis);

var onck = document.getElementsByClassName('onck');
// console.log(conceal);

var masking = document.getElementsByClassName('masking')
console.log(masking.length);
// var deletes = document.getElementsByClassName('particular')

for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i)

    lis[i].onclick = function () {
        var and = this.getAttribute('index')
        for (var j = 0; j < onck.length; j++) {
            onck[j].style.display = 'none'
            onck[and].style.display = 'block'
        }
    }

}
for (var k = 0; k < masking.length; k++) {
    masking[k].onclick = function () {
        for (var i = 0; i < onck.length; i++) {
            onck[i].style.display = 'none'
        }
    }
}



