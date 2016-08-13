$(document).on("pagecreate",function(){
	
	//Hide page rates
	$('#otherRates').hide();
	//Create mainList variable
	var mainList = $('#mainList')	

	$('form').on('submit' , function(e) {
		//Get user input
		var inputValue = $('#newNote').val();
		
		//GET rates using Ajax from http://api.fixer.io/latest?base=CAD
   		 $.getJSON("http://api.fixer.io/latest?base=CAD", function(data) {
			//Empty the mainList for new data 
			mainList.empty();
      			//Pass keys of JSON object
        		var keys = Object.keys(data.rates)
				
        		//Append to list after
        		keys.forEach(function(key) {
          			mainList.listview().append('<li>' + key + ': ' + (inputValue * data.rates[key]).toFixed(2));
        		});
			mainList.listview('refresh');
		 });//getJSON
		$('#otherRates').show();
		e.preventDefault();
	});//
});

