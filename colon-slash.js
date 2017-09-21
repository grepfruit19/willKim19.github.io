function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = function(e) {
  console.log('working');
  let faceColor = getRandomColor();
  let faceElements = document.getElementsByClassName('face');
  for (let i = 0; i < faceElements.length; i++) {
    faceElements[i].style.backgroundColor = faceColor;
  }
  let box = document.getElementById('container');
  box.style.backgroundColor = getRandomColor();
}
