// jQuery Toggle switch
$(document).ready(function () {
  const t = $("#true");
  const f = $("#false");
  const s = $("#switcher");
  const selected = "active";

  // on Switcher
  s.click(function () {
    f.toggleClass(selected);
    t.toggleClass(selected);
  });
  // on False
  f.click(function () {
    s.prop("checked", true);
    f.addClass(selected);
    t.removeClass(selected);
  });
  //on True
  t.click(function () {
    s.prop("checked", false);
    t.addClass(selected);
    f.removeClass(selected);
  });

  const value = [1, 0];

  function foo() {
    if (s.prop("checked")) {
      result = value[1]
    } else {
      result = value[0]
    }
    const myResult = result;
    $('.output').html(myResult);
  }
  foo()

});