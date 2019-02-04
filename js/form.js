$("#form").submit(function(event){
    event.preventDefault(); 
    var post_url = $(this).attr("action");
    var request_method = $(this).attr("method");
    var form_data = new FormData(this); 
    var successBox = $("#message-alert-sent");
    var failBox = $("#message-alert-sent");
    var form = $(this);
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