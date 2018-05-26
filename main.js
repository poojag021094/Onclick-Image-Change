document.querySelector('img').onclick = function(){
  var imgsrc = document.querySelector('img').getAttribute('src');
  if(imgsrc === 'Sad_smiley.jpg')
  {
    document.querySelector('img').setAttribute('src','Big_smile.png');
  }else {
    document.querySelector('img').setAttribute('src','Sad_smiley.jpg');
  }
}
