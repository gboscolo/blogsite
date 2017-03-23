var NewManager = (function(){
  var servicesUrl = "";
  this.newManager = this.newManager || {
        Init: function(services) {
            servicesUrl = services;
        },
        InsertPost: function() {
          
            let newPost = {
                Text: $("#blog-text").val(),
                User: $("#username").val()
            };

            if(newPost.Text == "" || newPost.User == ""){
              return;
            }

            $.ajax({
				method: "POST",
				traditional: true,
			  url: servicesUrl + "insertpost",
			  data: JSON.stringify({ entry : { Text: newPost.Text, User: newPost.User}}),
			  success: function(){
				window.location.href = "list.html";
			  },
			  error: function(error){
				alert("É avvenuto un errore durante l'inserimento dell'utente");
				console.log(error);	
			  },
			dataType : "json",
			contentType: "application/json; charset=utf-8",
            });
        }
  }

  return this.newManager;
});
