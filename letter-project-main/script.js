const message = `aku tuh sebenernya sedih banget, sayang…
karena kita berakhir bukan karena kita nggak cinta,
tapi karena jarak yang nggak bisa kita kalahin sekarang.
kadang aku mikir,
kalau aja kita tinggal lebih deket,
mungkin ceritanya beda.

aku nggak pernah nyalahin kamu,
aku cuma sedih sama keadaan.
and deep down,
i still hope that in another life,
we won’t have to love each other from this far away.
kita bisa deket, gampang ketemu,
tanpa harus ngelepas satu sama lain cuma karena jarak.
i love u in every universe -zahra`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // gelapkan layar luar
  document.getElementById("overlay").style.opacity = "1";
  document.body.style.background = "#0f0f18";

  // musik fade in
  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");

    letterBox.style.display = "block";

    setTimeout(() => {
      letterBox.style.opacity = "1";
      letterBox.style.transform = "translateY(0) scale(1)";
    }, 100);

    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 70); // makin besar makin pelan
      }
    }

    typeWriter();
  }, 800);
}
