function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function isNullOrEmpty(item)
{
	return item != null && item != '';
}

function Hello() {
  return "Hello world!";
}

function onLoad() {
  var outT = document.getElementById('out');
  outT.innerHTML = Hello();
}