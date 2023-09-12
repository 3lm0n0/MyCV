document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      window.location.href = "./theme-1/index.html";
    }
  });

  if (checkbox.checked) {
    checkbox.checked = false;
  }
});