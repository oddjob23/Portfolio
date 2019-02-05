//validate name input
$("#name").blur(function(){
    var name = $("#name").val();
    if(name.length < 1) {
        $('label[for="name"]').after('<p class="error">Please fill in this field.</p>');
        $("#name").css({
            borderBottom: "2px solid #EC407A",
            transition: "border 0.4s ease-in-out"
        });
    } else {
        $(".error").remove();
        $("#name").css({
            borderBottom: "1px solid #4CAF50"
        });
    }
});

$("#email").blur(function(){
    var email = $("#email").val();
    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = regEx.test(email);
   
    if(email.length < 1) {
        $('label[for="email"]').after('<p class="error">Please fill in this field.</p>');
        $("#email").css({
            borderBottom: "2px solid #EC407A",
            transition: "border 0.4s ease-in-out"
        });
    } else if(!validEmail){
        $(".error").remove();
        $('label[for="email"]').after('<p class="error">Please enter valid e-mail address. </p>');
        $("#email").css({
            borderBottom: "2px solid #EC407A",
            transition: "border 0.4s ease-in-out"
        });
    } else {
        $(".error").remove();
        $("#email").css({
            borderBottom: "1px solid #4CAF50"
        });
    }
});
$("#form").submit(function(event){
    event.preventDefault(); 
    
    var email = $("#email").val()
    var post_url = $(this).attr("action");
    var request_method = $(this).attr("method");
    var form_data = new FormData(this); 
    var successBox = $("#message-alert-sent");
    var form = $(this);

    // slanje podataka
    $.ajax({
        url : post_url,
        type: request_method,
        data : form_data,
		contentType: false,
		cache: false,
		processData:false
    }).done(function(response){
        $("#server-results").html(response);
        form.trigger("reset");
        successBox.show();
        setTimeout(function(){
            successBox.fadeOut("slow");
        }, 3000)
    });
});