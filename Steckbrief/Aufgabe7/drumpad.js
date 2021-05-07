var Sound = [new Audio('kick.wav'), new Audio('808.wav'), new Audio('clap.wav'), new Audio('hihat.wav'), new Audio('openhat.wav'), new Audio('rim.wav'), new Audio('chant.wav'), new Audio('synth1.wav'), new Audio('synth2.wav')];
window.addEventListener("load", function playSample() {
    document.querySelector(".button1").addEventListener("click", function () { (Sound[0]).play(); });
    document.querySelector(".button2").addEventListener("click", function () { (Sound[1]).play(); });
    document.querySelector(".button3").addEventListener("click", function () { (Sound[2]).play(); });
    document.querySelector(".button4").addEventListener("click", function () { (Sound[3]).play(); });
    document.querySelector(".button5").addEventListener("click", function () { (Sound[4]).play(); });
    document.querySelector(".button6").addEventListener("click", function () { (Sound[5]).play(); });
    document.querySelector(".button7").addEventListener("click", function () { (Sound[6]).play(); });
    document.querySelector(".button8").addEventListener("click", function () { (Sound[7]).play(); });
    document.querySelector(".button9").addEventListener("click", function () { (Sound[8]).play(); });
    document.querySelector(".play").addEventListener("click", function playBeat() {
        setInterval(function () {
            Sound[3].play();
        }, 600);
        setInterval(function () {
            (Sound[2]).play();
        }, 1200);
        setInterval(function () {
            (Sound[4]).play();
        }, 4800);
        setInterval(function () {
            (Sound[6]).play();
        }, 8700);
        setInterval(function () {
            (Sound[0]).play();
        }, 1500);
    });
});
//# sourceMappingURL=drumpad.js.map