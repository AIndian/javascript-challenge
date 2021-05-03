// from data.js
var info = data;

//References
var tbody = d3.select("tbody");
var date = d3.select("#datetime");
var button = d3.select("#filter-btn");




function loadTable(table) {
    table.forEach((value) => {
        var row = tbody.append("tr");
        Object.entries(value).forEach(([key,value]) => {
            row.append("td").text(value);
        });
    });
}
// What to do when button is clicked
function handleClick() {
    d3.event.preventDefault();
    // resetting table
    tbody.html("")
    console.log(event)
    console.log(date)
    var inputDate = date.property("value");
    var filterInfo = info.filter(info => info.datetime === inputDate)
        if(filterInfo.length !== 0) {
            loadTable(filterInfo)
            }
        else {
            tbody.append("tr").append("td").text("No Sightings on this Date")
            }
}


//<button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>

loadTable(info)
button.on("click", handleClick);




//            <table id="ufo-table" class="table table-striped">
//              <thead>
//                <tr>
//                  <th class="table-head">Date</th>
//                  <th class="table-head">City</th>
//                  <th class="table-head">State</th>
//                  <th class="table-head">Country</th>
//                  <th class="table-head">Shape</th>
//                  <th class="table-head">Duration</th>
//                  <th class="table-head">Comments</th>
//                </tr>
//              </thead>
//              <tbody></tbody>