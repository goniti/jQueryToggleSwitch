// jQuery Toggle Switch

$(document).ready(function () {

  const a = "active";
  const t = $("#true");
  const f = $("#false");
  const s = $("#switcher");

  // click on True
  t.click(function () {
    s.prop("checked", false);
    t.addClass(a);
    f.removeClass(a);
    foo() //execute foo function if click on True
  });

  // click on False
  f.click(function () {
    s.prop("checked", true);
    f.addClass(a);
    t.removeClass(a);
    foo() //execute foo function if click on False
  });

  // click on Switch
  s.click(function () {
    f.toggleClass(a);
    t.toggleClass(a);
    foo() //execute foo function if click on switch
  });


  // Get value
  function foo() {
    const value = [1, 0];

    if (s.prop("checked")) {
      result = value[1]
    } else {
      result = value[0]
    }
    const myResult = result;
    $('.output').html(myResult);
  }

  foo() //execute foo function on load

});
