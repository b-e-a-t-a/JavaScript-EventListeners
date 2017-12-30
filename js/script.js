/*function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});
*/


var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var nr = document.getElementsByTagName('li').length;
  element.innerHTML = 'item ' + nr;

  list.appendChild(element);
});