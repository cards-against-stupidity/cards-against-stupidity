// var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    // if (selectedRow == null)
        insertNewRecord(formData);
    //     else
        updateRecord(formData);

    resetForm();
}

function readFormData() {
    var formData = {};
    formData["topic"] = document.getElementById("topic").value;
    formData["numOfDecks"] = document.getElementById("numOfDecks").value;
    formData["crud"] = document.getElementById("crud").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.topic;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.numOfDecks;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.crud;  
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a>Edit</a>
                      <a>Delete</a>`;
}

// function resetForm() {
//    document.getElementById("topic").value = ""; 
//    document.getElementById("numOfDecks").value = "";
//    document.getElementById("crud").value = "";
//    selectedRow = null;
// }

// function onEdit(td) {
//    selectedRow = td.parentElement.parentElement;
//    document.getElementById("topic").value = selectedRow.cells[0].innerHTML;
//    document.getElementById("numOfDecks").value = selectedRow.cells[1].innerHTML;
//    document.getElementById("crud").value = selectedRow.cells[2].innerHTML;
// }

// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.topic;
//     selectedRow.cells[1].innerHTML = formData.numOfDecks;
//     selectedRow.cells[2].innerHTML = formData.crud;
// }

// function onDelete(td) {
//     row = td.parentElement.parentElement;
// }

















// function onFormSubmit() {
//     var formData = readFormData();
//     insertNewRecord(formData);

// }

// const readFormData = () => {
//     var formData = document.getElementsById("topic");
//     var formData = document.getElementById("numOfDecks");
//     var formData = document.getElementById("crud");
//     return formData;
// } 

// const insertNewRecord = (data) => {
//     var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.topic;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.numOfDecks;
//     cell3 = newRow.insertCell(3);
//     cell3.innerHTML = data.crud;  
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = '<a>Edit</a><a>Delete</a>';
// }