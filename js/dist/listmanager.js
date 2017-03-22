var ListManager = (function(){
  var servicesUrl = "";
  this.listManager = this.listManager || {
        Init: function(services) {
            servicesUrl = services;
            $.get({
               url: services + "getall",
               success: function(items){
                 debugger;
               },
               failure: function(error){
                 debugger;
               }
            })
        }
  }

  return this.listManager;
});
