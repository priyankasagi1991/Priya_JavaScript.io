// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clearing the table for new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};
  
// display of all UFO sightings
console.log(tableData);
tableDisplay(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filtering database
button.on("click", function(event) {
  
  d3.event.preventDefault();
  deleteTbody();
  
  var filteredData = tableData;
  var inputId = document.getElementsByClassName("form-control");
  
  // looping through the input fields
  for (var i = 0; i < inputId.length; i++) {
	
	var idName = inputId[i].id;
	var field = d3.select("#" + idName).property("value");
	
	
	if (field.trim() !== "") {
	  var filteredData = filteredData.filter(ufoSighting =>
	    // match as case insensitive
		ufoSighting[idName].toUpperCase().trim() ===
		field.toUpperCase().trim());
	};
  };
 
  // display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };
  
  // display the database
  console.log(filteredData);
  tableDisplay(filteredData);
});