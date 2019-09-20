// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Function to build table
function buildTable(data){
    // clearing out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// handleClick function
function handleClick(){
    d3.event.preventDefault() //in order to  prevent  from refreshing the page
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    
    if (date){
        
        filterData = filterData.filter((row) => row.datetime === date);

    }

    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);