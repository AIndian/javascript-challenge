// from data.js
var info = data;

//References
var tbody = d3.select("tbody");
var date = d3.select("#datetime");
var button = d3.select("#filter-btn");
var country = d3.select("#country");
var city = d3.select("#city");
var state = d3.select("#state");
var shape = d3.select("#shape");

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
    var inputCountry = country.property("value");
    var inputCity = city.property("value");
    var inputState = state.property("value");
    var inputShape = shape.property("value");


    var filterInfo = info;
    // checks if each element is empty or nonempty
    if (inputDate) {
        filterInfo = filterInfo.filter(filterInfo => filterInfo.datetime === inputDate)
    }
    if (inputCountry) {
        filterInfo = filterInfo.filter(filterInfo => filterInfo.country === inputCountry)
    }
    if (inputState) {
        filterInfo = filterInfo.filter(filterInfo => filterInfo.state === inputState)
    }
    if (inputShape) {
        filterInfo = filterInfo.filter(filterInfo => filterInfo.shape === inputShape)
    }
    if(filterInfo.length !== 0) {
        loadTable(filterInfo)
    }
    else {
        tbody.append("tr").append("td").text("No Sightings on this Date")
    }
}


loadTable(info)
button.on("click", handleClick);


