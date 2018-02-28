
var hiragana = "[\u3041-\u3096ー]";
var number = "[0-9]";

function setError(obj, value) {
    var classList = obj.classList;
    if(value){
        if(!classList.contains("error")){
            classList.add("error");
        }
    }else{
        if(classList.contains("error")){
            classList.remove("error");
        }
    }
    return value
}

function checkKanjiFirstName(){
    var obj = document.getElementsByName("kanjiFirstName")[0];
    var divObj = document.getElementById("kanjiFirstName");
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkKanjiLastName(){
    var obj = document.getElementsByName("kanjiLastName")[0];
    var divObj = document.getElementById("kanjiLastName");
    console.log(obj.value);
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkKanaFirstName(){
    var obj = document.getElementsByName("kanaFirstName")[0];
    var divObj = document.getElementById("kanaFirstName");
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkKanaLastName(){
    var obj = document.getElementsByName("kanaLastName")[0];
    var divObj = document.getElementById("kanaLastName");
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkAlphabetFirstName(){
    var obj = document.getElementsByName("alphabetFirstName")[0];
    var divObj = document.getElementById("alphabetFirstName");
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkAlphabetLastName(){
    var obj = document.getElementsByName("alphabetLastName")[0];
    var divObj = document.getElementById("alphabetLastName");
    return !setError(divObj, obj.value == "" || obj.value.length > 30)
}

function checkGender(){
    var obj = document.getElementsByName("gender")[0];
    var divObj = document.getElementById("gender");
    return !setError(divObj, obj.value == "")
}

function checkYear(){
    var obj = document.getElementsByName("year")[0];
    var divObj = document.getElementById("year");
    return !setError(divObj, obj.value == "")
}

function checkMonth(){
    var obj = document.getElementsByName("month")[0];
    var divObj = document.getElementById("month");
    return !setError(divObj, obj.value == "")
}

function checkDay(){
    var obj = document.getElementsByName("day")[0];
    var divObj = document.getElementById("day");
    return !setError(divObj, obj.value == "")
}

function checkZipCode1st(){
    var obj = document.getElementsByName("zipCode1st")[0];
    var divObj = document.getElementById("zipCode1st");
    var numRegex = new RegExp("^"+number+"{3}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkZipCode2nd(){
    var obj = document.getElementsByName("zipCode2nd")[0];
    var divObj = document.getElementById("zipCode2nd");
    var numRegex = new RegExp("^"+number+"{4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkEmployerZipCode1st(){
    var obj = document.getElementsByName("employerZipCode1st")[0];
    var divObj = document.getElementById("employerZipCode1st");
    var numRegex = new RegExp("^"+number+"{3}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkEmployerZipCode2nd(){
    var obj = document.getElementsByName("employerZipCode2nd")[0];
    var divObj = document.getElementById("employerZipCode2nd");
    var numRegex = new RegExp("^"+number+"{4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkAddress(){
    var obj = document.getElementsByName("address")[0];
    var divObj = document.getElementById("address");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkEmployerAddress(){
    var obj = document.getElementsByName("employerAddress")[0];
    var divObj = document.getElementById("employerAddress");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkIndustryType(){
    var obj = document.getElementsByName("industryType")[0];
    var divObj = document.getElementById("industryType");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkMobilePhoneNumber1st(){
    var obj = document.getElementsByName("mobilePhoneNumber1st")[0];
    var divObj = document.getElementById("mobilePhoneNumber1st");
    var numRegex = new RegExp("^"+"(070|080|090)"+"$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkMobilePhoneNumber2nd(){
    var obj = document.getElementsByName("mobilePhoneNumber2nd")[0];
    var divObj = document.getElementById("mobilePhoneNumber2nd");
    var numRegex = new RegExp("^"+number+"{4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkMobilePhoneNumber3rd(){
    var obj = document.getElementsByName("mobilePhoneNumber3rd")[0];
    var divObj = document.getElementById("mobilePhoneNumber3rd");
    var numRegex = new RegExp("^"+number+"{4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkHomePhoneNumber1st(){
    var obj = document.getElementsByName("homePhoneNumber1st")[0];
    var divObj = document.getElementById("homePhoneNumber1st");
    var numRegex = new RegExp("^"+"0"+number+"{1,3}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkHomePhoneNumber2nd(){
    var obj = document.getElementsByName("homePhoneNumber2nd")[0];
    var divObj = document.getElementById("homePhoneNumber2nd");
    var numRegex = new RegExp("^"+number+"{2,4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkHomePhoneNumber3rd(){
    var obj = document.getElementsByName("homePhoneNumber3rd")[0];
    var divObj = document.getElementById("homePhoneNumber3rd");
    var numRegex = new RegExp("^"+number+"{4}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkEmailAddress(){
    var obj = document.getElementsByName("emailAddress")[0];
    var divObj = document.getElementById("emailAddress");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkPosition(){
    var obj = document.getElementsByName("position")[0];
    var divObj = document.getElementById("position");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkDepartment(){
    var obj = document.getElementsByName("department")[0];
    var divObj = document.getElementById("department");
    return !setError(divObj, obj.value == "" || obj.value.length > 255)
}

function checkSpouse(){
    var obj = document.getElementsByName("spouse")[0];
    var divObj = document.getElementById("spouse");
    return !setError(divObj, obj.value == "" || obj.value.length > 20)
}

function checkHouseClassification(){
    var obj = document.getElementsByName("houseClassification")[0];
    var divObj = document.getElementById("houseClassification");
    return !setError(divObj, obj.value == "" || obj.value.length > 20)
}

function checkJob(){
    var obj = document.getElementsByName("job")[0];
    var divObj = document.getElementById("job");
    return !setError(divObj, obj.value == "" || obj.value.length > 120)
}

function checkIncome(){
    var obj = document.getElementsByName("income")[0];
    var divObj = document.getElementById("income");
    var numRegex = new RegExp("^"+number+"{0,6}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkCapital(){
    var obj = document.getElementsByName("capital")[0];
    var divObj = document.getElementById("capital");
    var numRegex = new RegExp("^"+number+"{0,6}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkCampanySize(){
    var obj = document.getElementsByName("companySize")[0];
    var divObj = document.getElementById("companySize");
    var numRegex = new RegExp("^"+number+"{0,255}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkEmployeeLength(){
    var obj = document.getElementsByName("employeeLength")[0];
    var divObj = document.getElementById("employeeLength");
    var numRegex = new RegExp("^"+number+"{0,6}$");
    return !setError(divObj, obj.value == "" || numRegex.exec(obj.value) == null)
}

function checkOnSubmit(){
    return checkKanjiFirstName() &&
        checkKanjiLastName() &&
        checkKanaFirstName() &&
        checkKanaLastName() &&
        checkAlphabetFirstName() &&
        checkAlphabetLastName() &&
        checkGender() &&
        checkYear() &&
        checkMonth() &&
        checkDay() &&
        checkZipCode1st() &&
        checkZipCode2nd() &&
        checkEmployerZipCode1st() &&
        checkEmployerZipCode2nd() &&
        checkAddress() &&
        checkEmployerAddress() &&
        checkIndustryType() &&
        checkMobilePhoneNumber1st() &&
        checkMobilePhoneNumber2nd() &&
        checkMobilePhoneNumber3rd() &&
        checkHomePhoneNumber1st() &&
        checkHomePhoneNumber2nd() &&
        checkHomePhoneNumber3rd() &&
        checkEmailAddress() &&
        checkPosition() &&
        checkDepartment() &&
        checkSpouse() &&
        checkHouseClassification() &&
        checkJob() &&
        checkIncome() &&
        checkCapital() &&
        checkCampanySize() &&
        checkEmployeeLength();
}
