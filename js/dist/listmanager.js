var ListManager = (function(){
  var servicesUrl = "";
  this.listManager = this.listManager || {
        Init: function(services) {
            servicesUrl = services;
            $.ajax({
				method: "GET",
				traditional: true,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				url: services + "getall",
				   success: function(items){
					 for(j=0;j<items.length;j++){
						 let row = $("<tr id='" + items[j].Id +"'><td>" + items[j].User + "</td><td>" + items[j].Text + "</td></tr>");
						$("#posts-table tbody").append(row);
					 }
				   },
				   failure: function(error){
					 alert("É avvenuto un errore durante il caricamento");
					 console.log(error);
				   }
            })
        }
  }

  return this.listManager;
});
