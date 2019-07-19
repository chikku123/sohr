/*
 * Form Validation
 */
$(function () {
  $("#formValidate").validate({
    rules: {
      uname: {
        required: true,
      },
      cemail: {
        required: true,
        email: true
      },
      cphone: {
        required: true
      },
      password: {
        required: true,
        minlength: 5
      },
      cpassword: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      curl: {
        required: true,
        url: true
      },
      crole: "required",
      ccomment: {
        required: true,
        minlength: 15
      },
      tnc_select: "required",
    },
    //For custom messages
    messages: {
      uname: {
        required: "Enter a username"
       
      },
      curl: "Enter your website",
    },
    errorElement: 'div',
    errorPlacement: function (error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });
});