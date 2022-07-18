var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("email-val").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("email-val").classList.contains("hide"))
            document.getElementById("email-val").classList.add("hide");
    }


    if (document.getElementById("contact").value == "") {
        isValid = false;
        document.getElementById("contact-val").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("contact-val").classList.contains("hide"))
            document.getElementById("contact-val").classList.add("hide");
    }

    if (document.getElementById("city").value == "") {
        isValid = false;
        document.getElementById("city-val").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("city-val").classList.contains("hide"))
            document.getElementById("city-val").classList.add("hide");
    }

    return isValid;
}


// function val(){
//     let name = document.getElementById("fullName").value;
//     if (name == "") {
//       alert("Name must be filled out");
//       return false;
//     }

//     let email = document.getElementById("email").value;
//     if (email == "") {
//       alert("Email must be filled out");
//       return false;
//     }

//     let contact = document.getElementById("contact").value;
//     if (contact == "") {
//       alert("Contact must be filled out");
//       return false;
//     }

//     let city = document.getElementById("city").value;
//     if (city == "") {
//       alert("City must be filled out");
//       return false;
//     }
// }
