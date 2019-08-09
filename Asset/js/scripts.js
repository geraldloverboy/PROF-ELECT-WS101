function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "img/pic_bulboff.gif"
    } else {
      pic = "img/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
    <img id="myImage" src="img/pic_bulboff.gif" width="100" height="180">
              
  }