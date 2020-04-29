function insert(num) {
  document.textForm.screenText.value = document.textForm.screenText.value + num;
}

function clean() {
  document.textForm.screenText.value = "";
}

function equal() {
  var evaluate = document.textForm.screenText.value;
  if (evaluate) {
    document.textForm.screenText.value = eval(evaluate);
  }
}

function backspace() {
  var x = document.textForm.screenText.value;
  document.textForm.screenText.value = x.substring(0, x.length - 1);
}
