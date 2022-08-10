// function onFormSubmit(){
//     var formData=readFormData();
//     insertNewRecord(formData);
//     resetForm();
// }


var selectedRow = null;
function onFormSubmit() {
 
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }



function readFormData(){    
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    formData["contact"]=document.getElementById("contact").value;
    // formData["male"]=document.getElementById("male").value;
    // formData["female"]=document.getElementById("female").value;
    return formData;

}


function insertNewRecord(data){
    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.email;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.contact;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=`<button><a onclick="onEdit(this)">Edit</a></button>  
                    <button><a onclick="onDelete(this)">Delete</a></button>`;
}



function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("contact").value="";
    // document.getElementById("male").value="";
    // document.getElementById("female").value="";
    selectedRow = null;
    
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cellS[1].innerHTML;
    
    document.getElementById("email").value=selectedRow.cellS[2].innerHTML;
   
    document.getElementById("contact").value=selectedRow.cellS[3].innerHTML;
    
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contact;

}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList1").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// ****************************************************

