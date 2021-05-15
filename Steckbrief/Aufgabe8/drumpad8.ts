

window.addEventListener("load", function (): void {

  var sample: HTMLAudioElement[] = [new Audio("kick.wav"), new Audio("808.wav"), new Audio("clap.wav"), new Audio("hihat.wav"), new Audio("openhat.wav"), new Audio("rim.wav"), new Audio("chant.wav"), new Audio("synth1.wav"), new Audio("synth2.wav")];
  var defaultBeat: HTMLAudioElement[] = [new Audio("kick.wav"), new Audio("hihat.wav"), new Audio("clap.wav"), new Audio("chant.wav")];
  var remix: HTMLAudioElement[] = [new Audio("kick.wav"), new Audio("808.wav"), new Audio("clap.wav"), new Audio("hihat.wav"), new Audio("openhat.wav"), new Audio("rim.wav"), new Audio("chant.wav"), new Audio("synth1.wav"), new Audio("synth2.wav")];
  var index: number = 0;

  function playSample (sample: HTMLAudioElement): void {
    sample.play();
  }

  document.querySelector(".button1").addEventListener("click", function (): void { (sample[0]).play(); });
  document.querySelector(".button2").addEventListener("click", function (): void  { (sample[1]).play(); });
  document.querySelector(".button3").addEventListener("click", function (): void  { (sample[2]).play(); });
  document.querySelector(".button4").addEventListener("click", function (): void  { (sample[3]).play(); });
  document.querySelector(".button5").addEventListener("click", function (): void  { (sample[4]).play(); });
  document.querySelector(".button6").addEventListener("click", function (): void  { (sample[5]).play(); });
  document.querySelector(".button7").addEventListener("click", function (): void  { (sample[6]).play(); });
  document.querySelector(".button8").addEventListener("click", function (): void  { (sample[7]).play(); });
  document.querySelector(".button9").addEventListener("click", function (): void  { (sample[8]).play(); });
  document.querySelector("#play").addEventListener("click", function playBeat(): void  {

    var intervalLoop: number = setInterval(function (): void  {

      defaultBeat[index].play();
      index++;

      if (index > 3)
        index = 0;

    },                                     350);



    document.querySelector("#stop").addEventListener("click", function (): void  {

      clearInterval(intervalLoop);

    }) ;

  });

  document.querySelector("#play").addEventListener("click", function (): void  {

    document.querySelector("#play").classList.add("isHidden");
    document.querySelector("#stop").classList.remove("isHidden");
  });

  document.querySelector("#stop").addEventListener("click", function (): void  {
    document.querySelector("#stop").classList.add("isHidden");
    document.querySelector("#play").classList.remove("isHidden");
  });



  document.querySelector("#delete").addEventListener("click", function (): void  {

    remix.length = 0;
  });

  document.querySelector("#remix").addEventListener("click", function (): void  {

    defaultBeat.length = 0;
    setInterval(function (): void  {

      playSample(remix[index]);
      index = Math.floor(Math.random() * 9);
      console.log(index);
    },          300);
  }

  );


});







