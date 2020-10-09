$(document).ready(function() {
 
  $("form[name='contact']").validate({
    
    rules: {
    
      firstname: "required",
  

      email: {
        required: true,
        
        email: true
      },
      message:"required"
    },
    
    messages: {
      firstname:"Please enter your firstname",
      
     
       
      email: "Please enter a valid email address",
      message: "Please add your query"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});