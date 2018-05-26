document.querySelector('img').onclick = function(){
  var myImg = document.querySelector('img');
  var imgsrc = myImg.getAttribute('src');
  if(imgsrc === 'Sad_smiley.jpg')
  {
    myImg.setAttribute('src','Big_smile.png');
  }else {
    myImg.setAttribute('src','Sad_smiley.jpg');
  }
}
