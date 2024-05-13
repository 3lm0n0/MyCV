document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      window.location.href = "../index.html";
    }
  });

  if (checkbox.checked) {
    checkbox.checked = false;
  }
});


//  Language Picker
// utility functions
if(!Util) function Util () {};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName('body')[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};


document.addEventListener('DOMContentLoaded', function () {
  var language = document.getElementById("language-selector");

  language.addEventListener('change', function () {
    url = window.location.href.split("/MyCV/")[1];
    if (language.value == "ES" && url == "") {
      window.location.href = "./es/index.html";
    }
	if (language.value == "ES" && url == "index.html") {
      window.location.href = "./theme-1/es/index.html";
    }
    if (language.value == "EN" && url == "theme-1/es/index.html") {
      window.location.href = "../index.html";
    }
  });

});