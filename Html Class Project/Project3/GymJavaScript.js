function validate() {
    var errormessage = "";

    if (Reg.Firstname.value == null || Reg.Firstname.value == "") {
        errormessage += "input first name \n";
        //alert("input first name")
        document.getElementById('Firstname').style.borderColor = "red";
    }
    if (Reg.Lastname.value == null || Reg.Lastname.value == "") {
        errormessage += "input last name \n";
        //alert("input last name")
        document.getElementById('Lastname').style.borderColor = "red";
    }
    if (Reg.PhoneNum.value == null || Reg.PhoneNum.value == "") {
        errormessage += "input phone number \n";
        //alert("input phone number")
        document.getElementById('PhoneNum').style.borderColor = "red";
    }
    if (Reg.Email.value == null || Reg.Email.value == "") {
        errormessage += "input email \n";
        //alert("input email ")
        document.getElementById('Email').style.borderColor = "red";
    }
    if (Reg.Address.value == null || Reg.Address.value == "") {
        errormessage += "input address \n";
        //alert("input address ")
        document.getElementById('Address').style.borderColor = "red";
    }
    if (Reg.City.value == null || Reg.City.value == "") {
        errormessage += "input city \n";
       //alert("input city ")
        document.getElementById('City').style.borderColor = "red";
    }
    if (Reg.State.value == null || Reg.State.value == "") {
        errormessage += "input state \n";
        //alert("Select state ")
        document.getElementById('State').style.borderColor = "red";
    }
    if (Reg.ZipCode.value == null || Reg.ZipCode.value == "") {
        errormessage += "input zipcode \n";
        //alert("input zipcode ")
        document.getElementById('ZipCode').style.borderColor = "red";
    }
    if (Reg.Check.value == null || Reg.Check.value == "") {
        errormessage += "accept terms \n";
        //alert("accept terms ")
        document.getElementById("checkbox").Check = true; // how to stop form from submitting if not checked
    }
    if (Reg.Card.value == null || Reg.Card.value == "") {
        errormessage += "paymrnt method \n";
        //alert("input paymrnt method")
        document.getElementById('Card').style.borderColor = "red";
    }
    if (Reg.Month.value == null || Reg.Month.value == "") {
        errormessage += "input experation month \n";
        //alert("input experation month")
        document.getElementById('Month').style.borderColor = "red";
    }
    if (Reg.Year.value == null || Reg.Year.value == "") {
        errormessage += "input experation year \n";
        //alert("input experation year")
        document.getElementById('Year').style.borderColor = "red";
    }

    if (errormessage != "") {
        alert(errormessage)
        return false;
    }
// try and

    return true;
}

function toSubmit() {
    alert('I will not submit');
    return false;
}

  

/*
function validate() {
    if (document.getElementById('Firstname').value == null || document.getElementById('Firstname').value == "") {
        alert('input first name')
        document.getElementById('Firstname').style.borderColor = "red";
    }
    if (document.getElementById('Lastname').value == null || document.getElementById('Lastname').value == "") {
        alert('input last name')
        document.getElementById('Lastname').style.borderColor = "red";
    }
    if (document.getElementById('PhoneNum').value == null || document.getElementById('PhoneNum').value == "") {
        alert('input phone number')
        document.getElementById('PhoneNum').style.borderColor = "red";
    }
    if (document.getElementById('Email').value == null || document.getElementById('Email').value == "") {
        alert('input email')
        document.getElementById('Email').style.borderColor = "red";
    }
    if (document.getElementById('Address').value == null || document.getElementById('Address').value == "") {
        alert('input address')
        document.getElementById('Address').style.borderColor = "red";
    }
    if (document.getElementById('City').value == null || document.getElementById('City').value == "") {
        alert('input city ')
        document.getElementById('City').style.borderColor = "red";
    }
    if (document.getElementById('State').value == null || document.getElementById('State').value == "") {
        alert('Select state')
        document.getElementById('State').style.borderColor = "red";
    }
    if (document.getElementById('ZipCode').value == null || document.getElementById('ZipCode').value == "") {
        alert('input zipcode')
        document.getElementById('ZipCode').style.borderColor = "red";
    }
    if (document.getElementById('Check').value == null || document.getElementById('Check').value == "") {
        alert('accept terms')
        document.getElementById('Check').style.borderColor = "red";
    }
    if (document.getElementById('Card').value == null || document.getElementById('Card').value == "") {
        alert('input paymrnt method')
        document.getElementById('Card').style.borderColor = "red";
    }
    if (document.getElementById('Month').value == null || document.getElementById('Month').value == "") {
        alert('input experation month')
        document.getElementById('Month').style.borderColor = "red";
    }
    if (document.getElementById('Year').value == null || document.getElementById('Year').value == "") {
        alert('input experation year')
        document.getElementById('Year').style.borderColor = "red";
    }

    return true;
}*/