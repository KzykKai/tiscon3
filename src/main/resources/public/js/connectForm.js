
function connect(){
    var form = document.forms[0];
    form.appendChild(getFullName("kanjiName", "kanjiFirstName", "kanjiLastName"));
    form.appendChild(getFullName("kanaName", "kanaFirstName", "kanaLastName"));
    form.appendChild(getFullName("alphabetName", "alphabetFirstName", "alphabetLastName"));
    form.appendChild(getFullZipCode("zipCode", "zipCode1st", "zipCode2nd"))
    //form.appendChild(getFullZipCode("employerZipCode", "employerZipCode1st", "employerZipCode2nd"))
    form.appendChild(getFullDateOfBirth());
    console.log(document.getElementById("kanjiName").value);
}

function getFullName(full, first, last) {
    var firstName = document.getElementById(first);
    var lastName = document.getElementById(last);
    var input = document.createElement("input");
    input.name = full;
    input.id = full;
    input.type = "text";
    input.value = lastName.value + " " + firstName.value;
    return input;
}

function getFullPhoneNumber(full, first, second, third){
    var firstNum = document.getElementById(first);
    var secondNum = document.getElementById(second);
    var thirdNum = document.getElementById(third);
    var input = document.createElement("input");
    input.name = full;
    input.id = full;
    input.type = "text";
    input.value = firstNum + "-" + secondNum + "-" + thirdNum;
    return input;
}

function getFullZipCode(full, first, second){
    var firstNum = document.getElementById(first);
    var secondNum = document.getElementById(second);
    var input = document.createElement("input");
    input.name = full;
    input.id = full;
    input.type = "text";
    input.value = firstNum + "-" + secondNum;
    return input;
}

function getFullDateOfBirth(){
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var input = document.createElement("input");
    input.name = "dateOfBirth";
    input.id = "dateOfBirth";
    input.type = "text";
    input.value = year + "/" + month + "/" + day;
    return input;

}
