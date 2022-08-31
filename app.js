function AllData(getId,getName,getFname,getEmail,getAddress,getDesignation,getExperience,getSalary) {
    this.id = getId,
    this.name = getName,
    this.father_Name = getFname,
    this.email = getEmail,
    this.address = getAddress,
    this.designation = getDesignation,
    this.experience = getExperience,
    this.salary = getSalary
}
var employee1 = new AllData(1401, "Ali Khan", "Bilal Khan", "nothing1@gmail.com", "House No.1, Gulshan, Karachi", "Senior Manager", "4 Years", 80000);
var employee2 = new AllData(1402, "Usman Ali", "Naveed Ali", "nothing2@gmail.com", "House No.2, Korangi, Karachi", "Assistant Manager", "3 Years", 60000);
var employee3 = new AllData(1403, "Syed Maaz", "Syed Fahad", "nothing3@gmail.com", "House No.3, DHA, Karachi", "Supervisor", "4 Years", 40000);
var totalEmployees = [employee1, employee2, employee3];
console.log(employee1.id);


var getBody = document.getElementById("container");
var tbl = document.createElement("table");
tbl.setAttribute("id", "info-table");
getBody.appendChild(tbl);

var tableTitle = document.createElement("tr");
var tdTitle = document.createElement("td");
tdTitle.setAttribute("id", "table-title");
tdTitle.setAttribute("colspan","8");
tdTitle.appendChild(document.createTextNode("Employee's Information"))
tableTitle.appendChild(tdTitle)  
tbl.appendChild(tableTitle);
var tr = document.createElement("tr");
tbl.appendChild(tr);

for(var key in employee1) { // this loop finds how many properties exist in object and display their names
    var th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    tr.appendChild(th);
}
for(var i=0; i<totalEmployees.length; i++) { //this loop is based on how many objects are there in ojects array
    var tr = document.createElement("tr");//creates <tr> for each object 
    tbl.appendChild(tr);
    console.log(totalEmployees[i]);

    for(var key in totalEmployees[i]) {// this loop is for getting values of properties
        var td = document.createElement("td");// creates <td> for each value
        td.appendChild(document.createTextNode(totalEmployees[i][key]));//this is how to get value of properties
        tr.appendChild(td);
    }
}