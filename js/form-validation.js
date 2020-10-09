
$(document).ready(function() {
 
  $("form[name='registration']").validate({
    
    rules: {
     //min-2
      firstname: "required",
      lastname: "required",
      
      email: {
        required: true,
        // regex
        email: true
      },
      //numeric and fixed-10 digit and lebel in design just above input 
      // in image select only jpg png and jpeg image format
      contact:"required",
      //password sholud be same
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
      //on keyup 
      //json ajax advance jquery core php core mysql-2 week 

    }
  });



});

