
$(document).ready(function() {
 
  $("form[name='registration']").validate({
    
    rules: {
    
      firstname: "required",
      lastname: "required",

      email: {
        required: true,
        
        email: true
      },
      contact:"required",
      password: {
        required: true,
        minlength: 5
      },
      confirmpassword: {
        required: true,
        minlength: 5
      }
    },
    
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      contact: "Please enter your contact",

      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      confirmpassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});