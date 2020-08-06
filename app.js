console.log('TODO...');
// let $ = jquery;
let id = `<td>IdHere</td>`;
let firstName = `<td>firstName</td>`;
let lastName = `<td>lastName</td>`;
let facultyNumber = `<td>Fc#</td>`;
let grade = `<td>grade</td>`;
let url = `https://baas.kinvey.com/appdata/kid_SyIdiNmWP/students`;

$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization': 'Basic UnlhbjpSeWFu',
            'Content-Type': 'application/json',
        }
    });
    function get() {
        $.get(url).then(function(res) {
            let sorted = res.sort((a, b) => {
                return a.ID - b.ID;
            });
            sorted.forEach(element=> {
                
                let tr = `<tr></tr>`;
                let id = `<td>${element.ID}</td>`;

                let firstName = `<td>${element.FirstName}</td>`;
                let lastName = `<td>${element.LastName}</td>`;

                let facultyNumber = `<td>${element.FacultyNumber}</td>`;
                let grade = `<td>${element.Grade}</td>`;
                
                
                $("#tbody").append(tr, id, firstName, lastName, facultyNumber, grade);
            });
        });
    }

    get();
});
