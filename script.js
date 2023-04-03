var text = "Special images to me."; // replace with your desired text
var index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    index = 0;
    document.getElementById("typewriter").innerHTML = "";
    setTimeout(typeWriter, 1000);
  }
}

typeWriter();
