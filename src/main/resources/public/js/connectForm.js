
function connect(){
    var form = document.forms[0];
    form.appendChild(getFullName("kanjiName", "kanjiFirstName", "kanjiLastName"));
    form.appendChild(getFullName("kanaName", "kanaFirstName", "kanaLastName"));
    form.appendChild(getFullName("alphabetName", "alphabetFirstName", "alphabetLastName"));
    form.appendChild(getFullPhoneNumber("homePhoneNumber", "homePhoneNumber1st","homePhoneNumber2nd", "homePhoneNumber3rd"))
    form.appendChild(getFullPhoneNumber("mobilePhoneNumber", "mobilePhoneNumber1st","mobilePhoneNumber2nd", "mobilePhoneNumber3rd"))
    form.appendChild(getFullZipCode("zipCode", "zipCode1st", "zipCode2nd"))
    form.appendChild(getFullDateOfBirth());
}

function connect2(){
    var form = document.forms[0];
    form.appendChild(getFullZipCode("employerZipCode", "employerZipCode1st", "employerZipCode2nd"))
    form.appendChild(getFullPhoneNumber("employerPhoneNumber", "employerPhoneNumber1st","employerPhoneNumber2nd", "mobilePhoneNumber3rd"))
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
