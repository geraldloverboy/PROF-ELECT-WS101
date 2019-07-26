function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic_bulbon.gif"
  } else {
    pic = "pic_bulboff.gif"
  }
  document.getElementById('myImage').src = pic;
}