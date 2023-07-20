window.onload = function () {
  var check = document.querySelector("#shippingInfo"); //체크박스에 아이디를 담음.
  check.addEventListener("click", function () {
    if (check.checked == true) {
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;
    } else {
      document.querySelector("#shippingName").value = "";
      document.querySelector("#shippingTel").value = "";
      document.querySelector("#shippingAddr").value = "";
    }
  });
};
