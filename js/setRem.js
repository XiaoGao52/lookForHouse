function setRem() {
    var uiWidth_ = 375;
    var clientWidth_ = document.documentElement.clientWidth;
    clientWidth_ = clientWidth_ < 375 ? 375 : clientWidth_;
    document.querySelector('html').style.fontSize = ((clientWidth_ / uiWidth_) * 10) + 'px'
}
window.onload = setRem;
window.onresize = setRem;