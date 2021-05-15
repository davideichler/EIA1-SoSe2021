window.addEventListener("load", function () {
    var sample = [new Audio("kick.wav"), new Audio("808.wav"), new Audio("clap.wav"), new Audio("hihat.wav"), new Audio("openhat.wav"), new Audio("rim.wav"), new Audio("chant.wav"), new Audio("synth1.wav"), new Audio("synth2.wav")];
    var defaultBeat = [new Audio("kick.wav"), new Audio("hihat.wav"), new Audio("clap.wav"), new Audio("chant.wav")];
    var remix = [new Audio("kick.wav"), new Audio("808.wav"), new Audio("clap.wav"), new Audio("hihat.wav"), new Audio("openhat.wav"), new Audio("rim.wav"), new Audio("chant.wav"), new Audio("synth1.wav"), new Audio("synth2.wav")];
    var index = 0;
    function playSample(sample) {
        sample.play();
    }
    document.querySelector(".button1").addEventListener("click", function () { (sample[0]).play(); });
    document.querySelector(".button2").addEventListener("click", function () { (sample[1]).play(); });
    document.querySelector(".button3").addEventListener("click", function () { (sample[2]).play(); });
    document.querySelector(".button4").addEventListener("click", function () { (sample[3]).play(); });
    document.querySelector(".button5").addEventListener("click", function () { (sample[4]).play(); });
    document.querySelector(".button6").addEventListener("click", function () { (sample[5]).play(); });
    document.querySelector(".button7").addEventListener("click", function () { (sample[6]).play(); });
    document.querySelector(".button8").addEventListener("click", function () { (sample[7]).play(); });
    document.querySelector(".button9").addEventListener("click", function () { (sample[8]).play(); });
    document.querySelector("#play").addEventListener("click", function playBeat() {
        var intervalLoop = setInterval(function () {
            defaultBeat[index].play();
            index++;
            if (index > 3)
                index = 0;
        }, 350);
        document.querySelector("#stop").addEventListener("click", function () {
            clearInterval(intervalLoop);
        });
    });
    document.querySelector("#play").addEventListener("click", function () {
        document.querySelector("#play").classList.add("isHidden");
        document.querySelector("#stop").classList.remove("isHidden");
    });
    document.querySelector("#stop").addEventListener("click", function () {
        document.querySelector("#stop").classList.add("isHidden");
        document.querySelector("#play").classList.remove("isHidden");
    });
    document.querySelector("#delete").addEventListener("click", function () {
        remix.length = 0;
    });
    document.querySelector("#remix").addEventListener("click", function () {
        defaultBeat.length = 0;
        setInterval(function () {
            playSample(remix[index]);
            index = Math.floor(Math.random() * 9);
            console.log(index);
        }, 300);
    });
});
//# sourceMappingURL=drumpad8.js.map