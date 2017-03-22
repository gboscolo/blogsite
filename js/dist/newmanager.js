var NewManager = (function(){
  var servicesUrl = "";
  this.newManager = this.newManager || {
        Init: function(services) {
            servicesUrl = services;
        },
        InsertPost: function() {
          debugger;
            let newPost = {
                Text: $("#blog-text"),
                User: $("#username").val()
            };

            if(newPost.Text == "" || newPost.User == ""){
              return;
            }

            $.post({
              url: servicesUrl + "insertpost",
              data: { entry : { Text: newPost.Text, User: newPost.User}},
              success: function(){
                debugger;
              },
              failure: function(){
                debugger;
              }

            });
        }
  }

  return this.newManager;
});
