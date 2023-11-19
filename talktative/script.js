const textarea = document.getElementById("textarea");
const paragraph = document.getElementById("paragraph");
let a = document.getElementById("mymusic");
function show() {
  if (textarea.value == "hey") {
    document.getElementById("paragraph").innerHTML = "hllo madhu !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  } else if (textarea.value.length == " ") {
    document.getElementById("paragraph").innerHTML =
      "you don't write anything !";
      document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(moon_cloud.png.jpg)";
  } else if (textarea.value == "how are you") {
    document.getElementById("paragraph").innerHTML =
      "i am good and what about you ?";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  } else if (textarea.value == "who are you") {
    document.getElementById("paragraph").innerHTML = "my name is arpit.";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  } else if (textarea.value == "i am also good") {
    document.getElementById("paragraph").innerHTML = "that's good !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  } else if (textarea.value == "play music") {
    document.getElementById("paragraph").innerHTML = "music is played enjoy !";
    a.play();
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(music.png.jpeg)";
  } else if (textarea.value == "off music") {
    a.pause();
    document.getElementById("paragraph").innerHTML = "music is stop !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(vector2.png.jpg)";
  } else if (textarea.value == "what is your name") {
    document.getElementById("paragraph").innerHTML = "my name is starino.";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  }else if (textarea.value == "can you be my friend") {
    document.getElementById("paragraph").innerHTML = "yes ofcourse !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  }else if (textarea.value == "where do you live") {
    document.getElementById("paragraph").innerHTML = "i am live in your laptop !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(sunrise_clouds.jpg)";
  }else {
    document.getElementById("paragraph").innerHTML = "wrong detail !";
    document.getElementById("container2").style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.5),black),url(hax.png.webp)";
  }
}
