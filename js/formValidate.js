//var isValid = true;
var passWordsValid = true;
var fNameValid;
var lNameValid;
var userNameValid;
var address1Valid;
var address2Valid = true;
var cityValid;
var maritalValid;
var genderValid;
var zipValid;
var phoneValid = true;
var emailValid;
var stateValid;
var birthdayValid;

function checkPasswords()
{

    var pass1 = document.getElementById("password");
    var pass2 = document.getElementById("password2");

    var pass1Value = pass1.value;

    index = pass1Value.search(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_).*)$/)
    if (index > -1)
    {
        var pPassEle = document.getElementById("passMsg");

        if(pPassEle)
        {
            pPassEle.innerHTML= "Password Strength Good";
            pPassEle.classList.add("valid");
            pPassEle.classList.remove("invalid");
        }

    }
    else
    {
        var pPassEle = document.getElementById("passMsg");
        if(pPassEle)
        {
            pPassEle.innerHTML= "Password invalid: please use 1 uppercase, 1 lowercase, 1 digit and 1 special char.";
            pPassEle.classList.remove("valid");
            pPassEle.classList.add("invalid");
        }
        //isValid = false;
        passWordsValid = false;
        return false;
    }

    if(pass1 && pass2)
    {

        if(pass1.value == "")
        {
            var pass1Div = document.getElementById("passDiv");

            if (pass1Div)
            {
                pass1Div.classList.add("has-error");
                pass1Div.classList.remove("has-success");
            }
            var pass1Err = document.getElementById("passErr");
            if (pass1Err)
            {
                pass1Err.classList.remove("hide");
                pass1Err.classList.add("show");
            }
            //isValid = false;
            passWordsValid = false;
            return false;
        }
        else
        {
            var pass1Div = document.getElementById("passDiv");
            if (pass1Div)
            {
                pass1Div.classList.remove("has-error");
                pass1Div.classList.add("has-success");
            }

            var pass1Err = document.getElementById("passErr");
            if (pass1Err)
            {
                pass1Err.classList.add("hide");
                pass1Err.classList.remove("show");
            }

        }

        if (pass1.value != pass2.value)
        {
            var password2Div = document.getElementById("pass2Div");
            if (password2Div)
            {
                password2Div.classList.add("has-error");
                password2Div.classList.remove("has-success");
            }

            var password2Err = document.getElementById("pass2Err");
            if (password2Err)
            {
                password2Err.classList.remove("hide");
                password2Err.classList.add("show");
            }
            //isValid = false;
            passWordsValid = false;
            return false;
        }
        else
        {
            var password2Div = document.getElementById("pass2Div");
            if (password2Div)
            {
                password2Div.classList.remove("has-error");
                password2Div.classList.add("has-success");
            }

            var password2Err = document.getElementById("pass2Err");
            if (password2Err)
            {
                password2Err.classList.add("hide");
                password2Err.classList.remove("show");
            }
            passWordsValid = true;
        }
        return false;
    }
}

function checkFname()
{
    var fName = document.getElementById("firstname");
    fNameValid = true;
    if(fName)
    {
        if (fName.value == "")
        {
            var fNameDiv = document.getElementById("firstNameDiv")

            if (fNameDiv)
            {
                fNameDiv.classList.add("has-error");
                fNameDiv.classList.remove("has-success");
            }
            var firstNameErr = document.getElementById("fNameErr");
            if (firstNameErr)
            {
                firstNameErr.classList.remove("hide");
                firstNameErr.classList.add("show");
            }
            //isValid = false;
            fNameValid = false;
            return false;
        }
        else
        {
            var fNameDiv = document.getElementById("firstNameDiv");
            if (fNameDiv)
            {
                fNameDiv.classList.remove("has-error");
                fNameDiv.classList.add("has-success");
            }

            var firstNameErr = document.getElementById("fNameErr");
            if (firstNameErr)
            {
                firstNameErr.classList.add("hide");
                firstNameErr.classList.remove("show");
            }
            fNameValid = true;
            return true;
        }
        var fName = document.getElementById("firstname");
        if (fName.value.length > 50)
        {
            alert("Name cannot exceed 50 characters");
            var fNameDiv = document.getElementById("firstNameDiv");
            if (fNameDiv)
            {
                fNameDiv.classList.add("has-error");
                fNameDiv.classList.remove("has-success");
            }
            //isValid = false;
            fNameValid = false;
            return false;
        }
        else
        {
            var fNameDiv = document.getElementById("firstNameDiv");
            if (fNameDiv)
            {
                fNameDiv.classList.remove("has-error");
                fNameDiv.classList.add("has-success");
            }
            fNameValid = true;
        }
        return false;
    }
}

function checkLname()
{

    var lName = document.getElementById("lastname");
    lNameValid = true;
    if(lName)
    {
        if (lName.value == "")
        {
            var lNameDiv = document.getElementById("lastNameDiv")

            if (lNameDiv)
            {
                lNameDiv.classList.add("has-error");
                lNameDiv.classList.remove("has-success");
            }
            var lastNameErr = document.getElementById("lNameErr");
            if (lastNameErr)
            {
                lastNameErr.classList.remove("hide");
                lastNameErr.classList.add("show");
            }
            //isValid = false;
            lNameValid = false;
            return false;
        }
        else
        {
            var lNameDiv = document.getElementById("lastNameDiv");
            if (lNameDiv)
            {
                lNameDiv.classList.remove("has-error");
                lNameDiv.classList.add("has-success");
            }

            var lastNameErr = document.getElementById("lNameErr");
            if (lastNameErr)
            {
                lastNameErr.classList.add("hide");
                lastNameErr.classList.remove("show");
            }
            lNameValid = true;
            return true;
        }
        var lName = document.getElementById("lastname");
        if (lName.value.length > 50)
        {
            alert("Name cannot exceed 50 characters");
            var lNameDiv = document.getElementById("lastNameDiv");
            if (lNameDiv)
            {
                lNameDiv.classList.add("has-error");
                lNameDiv.classList.remove("has-success");
            }
            //isValid = false;
            lNameValid = false;
            return false;
        }
        else
        {
            var lNameDiv = document.getElementById("lastNameDiv");
            if (lNameDiv)
            {
                lNameDiv.classList.remove("has-error");
                lNameDiv.classList.add("has-success");
            }
            lNameValid = true;
            return true;
        }
        return false;
    }
}

function checkUserName()
{
    var userName = document.getElementById("username");
    userNameValid = true;
    if(userName)
    {
        if (userName.value == "")
        {
            var userNameDiv = document.getElementById("usernameDiv")

            if (userNameDiv)
            {
                userNameDiv.classList.add("has-error");
                userNameDiv.classList.remove("has-success");
            }
            var userNameErr = document.getElementById("uNameErr");
            if (userNameErr)
            {
                userNameErr.classList.remove("hide");
                userNameErr.classList.add("show");
            }
            userNameValid = false;
            //isValid = false;
            return false;
        }
        else
        {
            var userNameDiv = document.getElementById("usernameDiv");
            if (userNameDiv)
            {
                userNameDiv.classList.remove("has-error");
                userNameDiv.classList.add("has-success");
            }

            var userNameErr = document.getElementById("uNameErr");
            if (userNameErr)
            {
                userNameErr.classList.add("hide");
                userNameErr.classList.remove("show");
            }
            userNameValid = true;
            return true;
        }
        var userName = document.getElementById("username");
        if (userName.value.length > 50 || userName.value.length < 6)
        {
            alert("username must be within 6-50 characters");
            var userNameDiv = document.getElementById("usernameDiv");
            if (userNameDiv)
            {
                userNameDiv.classList.add("has-error");
                userNameDiv.classList.remove("has-success");
            }
            //isValid = false;
            userNameValid = false;
            return false;
        }
        else
        {
            var userNameDiv = document.getElementById("usernameDiv");
            if (userNameDiv)
            {
                userNameDiv.classList.remove("has-error");
                userNameDiv.classList.add("has-success");
            }
            userNameValid = true;
            return true;
        }
        return false;
    }
}

function checkAddress1()
{
    var addr1 = document.getElementById("address1");
    address1Valid = true;
    if(addr1)
    {
        if (addr1.value == "")
        {
            var addr1Div = document.getElementById("address1Div")

            if (addr1Div)
            {
                addr1Div.classList.add("has-error");
                addr1Div.classList.remove("has-success");
            }
            var address1Err = document.getElementById("add1Err");
            if (address1Err)
            {
                address1Err.classList.remove("hide");
                address1Err.classList.add("show");
            }
            //isValid = false;
            address1Valid = false;
            return false;
        }
        else
        {
            var addr1Div = document.getElementById("address1Div");
            if (addr1Div)
            {
                addr1Div.classList.remove("has-error");
                addr1Div.classList.add("has-success");
            }

            var address1Err = document.getElementById("add1Err");
            if (address1Err)
            {
                address1Err.classList.add("hide");
                address1Err.classList.remove("show");
            }
            address1Valid = true;
            return true;
        }

        var addr1 = document.getElementById("address1");

        if (addr1.value.length > 100)
        {
            alert("address cannot exceed 100 characters");
            var addr1Div = document.getElementById("address1Div");
            if (addr1Div)
            {
                addr1Div.classList.add("has-error");
                addr1Div.classList.remove("has-success");
            }
            //isValid = false;
            address1Valid = false;
            return false;
        }
        else
        {
            var addr1Div = document.getElementById("address1Div");
            if (addr1Div)
            {
                addr1Div.classList.remove("has-error");
                addr1Div.classList.add("has-success");
            }
            address1Valid = true;
        }
        return false;
    }
}

function checkAddress2()
{
    var addr2 = document.getElementById("address2");
    address2Valid = true;
    if (addr2)
    {
        if (addr2.value.length > 100)
        {
            alert("address cannot exceed 100 characters");
            var addr2Div = document.getElementById("address2Div");
            if (addr2Div)
            {
                addr2Div.classList.add("has-error");
                addr2Div.classList.remove("has-success");
            }
            //isValid = false;
            address2Valid = false;
            return false;
        }
        else
        {
            var addr2Div = document.getElementById("address2Div");
            if (addr2Div)
            {
                addr2Div.classList.remove("has-error");
                addr2Div.classList.add("has-success");
            }
            address2Valid = true;
        }
    }
}

function checkCity()
{
    var city = document.getElementById("city");
    cityValid = true;
    if (city)
    {
        if (city.value == "")
        {
            var cityDiv = document.getElementById("cityDiv")

            if (cityDiv)
            {
                cityDiv.classList.add("has-error");
                cityDiv.classList.remove("has-success");
            }
            var cityErr = document.getElementById("cityErr");
            if (cityErr)
            {
                cityErr.classList.remove("hide");
                cityErr.classList.add("show");
            }
            //isValid = false;
            cityValid = false;
            return false;
        }
        else
        {
            var cityDiv = document.getElementById("cityDiv");

            if (cityDiv)
            {
                cityDiv.classList.remove("has-error");
                cityDiv.classList.add("has-success");
            }

            var cityErr = document.getElementById("cityErr");

            if (cityErr)
            {
                cityErr.classList.add("hide");
                cityErr.classList.remove("show");
            }
            cityValid = true;
            return true;
        }
        var city = document.getElementById("city");
        if (city.value.length > 50)
        {
            alert("city cannot exceed 50 characters");
            var cityDiv = document.getElementById("cityDiv");
            if (cityDiv)
            {
                cityDiv.classList.add("has-error");
                cityDiv.classList.remove("has-success");
            }
            //isValid = false;
            cityValid = false;
            return false;
        }
        else
        {
            var cityDiv = document.getElementById("cityDiv");
            if (cityDiv)
            {
                cityDiv.classList.remove("has-error");
                cityDiv.classList.add("has-success");
            }
            cityValid = true;
        }
        return false;
    }
}

function checkMaritalStatus()
{
    var maritalbttns = document.getElementsByName("status");
    var maritalValue = false;
    maritalValid = true;

    for(var i = 0; i < maritalbttns.length; i++)
    {
        if(maritalbttns[i].checked == true)
        {
            maritalValue = true;
        }
    }

    if (!maritalValue)
    {
        // alert("please choose a marital status!");
        var marriedDiv = document.getElementById("maritalDiv")

        if (marriedDiv)
        {
            marriedDiv.classList.add("has-error");
            marriedDiv.classList.remove("has-success");
        }
        var marriedErr = document.getElementById("maritalErr");

        if (marriedErr)
        {
            marriedErr.classList.remove("hide");
            marriedErr.classList.add("show");
        }
        //isValid = false;
        maritalValid = false;
        return false;
    }
    else
    {
        var marriedDiv = document.getElementById("maritalDiv");
        if (marriedDiv)
        {
            marriedDiv.classList.remove("has-error");
            marriedDiv.classList.add("has-success");
        }
        var marriedErr = document.getElementById("maritalErr");

        if (marriedErr)
        {
            marriedErr.classList.add("hide");
            marriedErr.classList.remove("show");
        }
        maritalValid = true;
        return true;
    }
}

function checkGender()
{
    var genderbttns = document.getElementsByName("gender");
    var genderValue = false;
    genderValid = true;

    for(var i = 0; i < genderbttns.length; i++)
    {
        if(genderbttns[i].checked == true)
        {
            genderValue = true;
        }
    }

    if (!genderValue)
    {
        var genderDiv = document.getElementById("genderDiv");

        if (genderDiv)
        {
            genderDiv.classList.add("has-error");
            genderDiv.classList.remove("has-success");
        }
        var genderErr = document.getElementById("genderErr");

        if (genderErr)
        {
            genderErr.classList.remove("hide");
            genderErr.classList.add("show");
        }
        //isValid = false;
        genderValid = false;
        return false;
    }
    else
    {
        var genderDiv = document.getElementById("genderDiv");
        if (genderDiv)
        {
            genderDiv.classList.remove("has-error");
            genderDiv.classList.add("has-success");
        }
        var genderErr = document.getElementById("genderErr");

        if (genderErr)
        {
            genderErr.classList.add("hide");
            genderErr.classList.remove("show");
        }
        genderValid = true;
        return true;
    }
}

function checkZip()
{
    var zip = document.getElementById("zip");
    zipValid = true;
    if(zip)
    {
        if (zip.value == "")
        {
            var zipDiv = document.getElementById("zipDiv")

            if (zipDiv)
            {
                zipDiv.classList.add("has-error");
                zipDiv.classList.remove("has-success");
            }
            var zipErr = document.getElementById("zipErr");
            if (zipErr)
            {
                zipErr.classList.remove("hide");
                zipErr.classList.add("show");
            }
            //isValid = false;
            zipValid = false;
            return false;
        }
        else
        {
            var zipDiv = document.getElementById("zipDiv");
            if (zipDiv)
            {
                zipDiv.classList.remove("has-error");
                zipDiv.classList.add("has-success");
            }

            var zipErr = document.getElementById("zipErr");
            if (zipErr)
            {
                zipErr.classList.add("hide");
                zipErr.classList.remove("show");
            }
            zipValid = true;
            return true;
        }
        var zip = document.getElementById("zip");
        if (zip.value.length > 10 || zip.value.length < 5)
        {
            alert("zip must be within 5-10 characters");
            var zipDiv = document.getElementById("zipDiv");
            if (zipDiv)
            {
                zipDiv.classList.add("has-error");
                zipDiv.classList.remove("has-success");
            }
            //isValid = false;
            zipValid = false;
            return false;
        }
        else
        {
            var zipDiv = document.getElementById("zipDiv");
            if (zipDiv)
            {
                zipDiv.classList.remove("has-error");
                zipDiv.classList.add("has-success");
            }
            zipValid = true;
        }
        return false;
    }
}

function checkPhone()
{
    var phoneValue = String(document.getElementById("tel").value).trim();
    phoneValid = true;
    if (phoneValue == "")
    {
        var pPhoneEle = document.getElementById("phoneMsg");

        if(pPhoneEle) {
            pPhoneEle.innerHTML = "This is a required field. Please enter a phone number.";
            pPhoneEle.classList.remove("valid");
            pPhoneEle.classList.add("invalid");
        }
        phoneValid = false;
        //isValid = false;
        return false;
    }

    console.debug("Checking phone!");

    var phoneValue = String(document.getElementById("tel").value).trim();
    console.debug("value: " + phoneValue);

    console.debug(
        phoneValue.search(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        ));




    var index = phoneValue.search(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

    if(index > -1)
    {
        var pPhoneEle = document.getElementById("phoneMsg");

        if(pPhoneEle)
        {
            pPhoneEle.innerHTML= "Valid Phone number";
            pPhoneEle.classList.add("valid");
            pPhoneEle.classList.remove("invalid");
        }
        phoneValid = true;
        return true;
    }
    else
    {
        var pPhoneEle = document.getElementById("phoneMsg");

        if(pPhoneEle){
            pPhoneEle.innerHTML = "Invalid Phone number";
            pPhoneEle.classList.remove("valid");
            pPhoneEle.classList.add("invalid");
        }
        phoneValid = false;
        //isValid = false;
        return false;
    }
    var phoneValue = String(document.getElementById("tel").value).trim();


    if (phoneValue.length > 12)
    {
        var pPhoneEle = document.getElementById("phoneMsg");

        if(pPhoneEle)
        {
            pPhoneEle.innerHTML = "Max length for phone number is 12. Please re-enter.";
            pPhoneEle.classList.remove("valid");
            pPhoneEle.classList.add("invalid");
        }
        phoneValid = false
        //isValid = false;
        return false;
    }
}

function checkEmail()
{
    var emailValue = String(document.getElementById("email").value).trim();

    console.debug("Checking email!");

    var emailValue = String(document.getElementById("email").value).trim();
    console.debug("value: " + emailValue);

    console.debug(
        emailValue.search(
            /^\S+\@\S+\.\S+$/
        ));


    emailValid = true;

    var index = emailValue.search(/^\S+\@\S+\.\S+$/);

    if(index > -1)
    {
        var pEmailEle = document.getElementById("emailMsg");

        if(pEmailEle)
        {
            pEmailEle.innerHTML= "Valid Email";
            pEmailEle.classList.add("valid");
            pEmailEle.classList.remove("invalid");
        }
        emailValid = true;
        return true;
    }
    else
    {
        var pEmailEle = document.getElementById("emailMsg");

        if(pEmailEle){
            pEmailEle.innerHTML = "Invalid Email";
            pEmailEle.classList.remove("valid");
            pEmailEle.classList.add("invalid");
        }
        emailValid = false;
        //isValid = false;
        return false;
    }
    var emailValue = String(document.getElementById("email").value).trim();
    if (emailValue == "")
    {
        var pEmailEle = document.getElementById("emailMsg");

        if(pEmailEle)
        {
            pEmailEle.innerHTML = "This is a required field. Please enter an email.";
            pEmailEle.classList.remove("valid");
            pEmailEle.classList.add("invalid");
        }
        emailValid = false;
        //isValid = false;
        return false;
    }
}

function checkState()
{
    //var select = document.querySelector('#state');

    var stateOptions = document.getElementById("state");
    var stateValue = false;

    //console.log(stateOptions[0], stateOptions[1], stateOptions[2]);


    for (var i = 0; i < stateOptions.options.length; i++)
    {
        if(stateOptions[i].selected == true)
        {
            stateValue = true;
        }
    }
    // console.log(stateValue);

    if (!stateValue)
    {
        var stateDiv = document.getElementById("stateDiv");
        if (stateDiv)
        {
            stateDiv.classList.add("has-error");
            stateDiv.classList.remove("has-success");
        }
        var stateErr = document.getElementById("stateErr");

        if (stateErr)
        {
            stateErr.classList.remove("hide");
            stateErr.classList.add("show");
        }
        stateValid = false;
        //isValid = false;
        return false;

    }
    else
    {
        var stateDiv = document.getElementById("stateDiv");
        if (stateDiv)
        {
            stateDiv.classList.remove("has-error");
            stateDiv.classList.add("has-success");
        }
        var stateErr = document.getElementById("stateErr");

        if (stateErr)
        {
            stateErr.classList.add("hide");
            stateErr.classList.remove("show");
        }
        stateValid = true;
        return true;
    }
}

function checkBirthday()
{
    var date = String(document.getElementById("birthday").value);

    //console.debug("value of date: " + date);
    //console.log(date);
    var index = date.search(/^\d{4}-\d{2}-\d{2}$/);

    if (index > -1)
    {
        birthdayValid = true;
        var pDateEle = document.getElementById("dateMsg");
        pDateEle.innerHTML = "valid";
        pDateEle.classList.remove("invalid");
        pDateEle.classList.add("valid");
    }
    else
    {
        var pDateEle = document.getElementById("dateMsg");

        if (pDateEle)
        {
            pDateEle.innerHTML = "This is a required field. Please enter a birthday.";
            pDateEle.classList.remove("valid");
            pDateEle.classList.add("invalid");
        }
        birthdayValid = false;
    }

    console.log(birthdayValid);

}


function enableSubmit()
{
    var isValid;
    //console.log(passWordsValid, fNameValid, lNameValid, userNameValid, address1Valid, address2Valid,
    //   cityValid, zipValid, emailValid, phoneValid, birthdayValid);

    if(passWordsValid && fNameValid && lNameValid && userNameValid && address1Valid && address2Valid &&
        cityValid && zipValid && emailValid && phoneValid && stateValid && genderValid && maritalValid && birthdayValid)
    {

        isValid = true;
    }
    else
    {
        isValid = false;
    }
    //console.log(birthdayValid);
    //console.log(isValid);
    var date = document.getElementById("birthday");
    console.debug("value of date: " + date);

    if(isValid)
    {
        var subBtn = document.getElementById("submitButton");
        if (subBtn)
        {
            subBtn.disabled = false;
        }
    }

}

const wrappingFunc=()=>
{
    checkPasswords();
    checkState();
    checkFname();
    checkLname();
    checkUserName();
    checkAddress1();
    checkAddress2();
    checkCity();
    checkGender();
    checkMaritalStatus();
    checkZip();
    checkState();
    checkEmail();
    checkPhone();
    checkBirthday();
}

function registerHandlers()
{
    document.getElementById("password2").onblur = checkPasswords;
    document.getElementById("password2").onchange = checkPasswords;
    //document.getElementById("password2").onblur = enableSubmit;
    //document.getElementById("password2").onchange = checkPasswords;
    document.getElementById("firstname").onchange = checkFname;
    document.getElementById("firstname").onblur = checkFname;
    //document.getElementById("firstname").onblur = enableSubmit;
    document.getElementById("lastname").onchange = checkLname;
    document.getElementById("lastname").onblur = checkLname;
    //document.getElementById("lastname").onblur = enableSubmit;
    document.getElementById("username").onchange = checkUserName;
    document.getElementById("username").onblur = checkUserName;
    //document.getElementById("username").onblur = enableSubmit;
    document.getElementById("address1").onchange = checkAddress1;
    document.getElementById("address1").onblur = checkAddress1;
    //document.getElementById("address1").onblur = enableSubmit;
    document.getElementById("address2").onchange = checkAddress2;
    document.getElementById("address2").onblur = checkAddress2;
    // document.getElementById("address2").onblur = enableSubmit;
    document.getElementById("city").onchange = checkCity;
    document.getElementById("city").onblur = checkCity;
    // document.getElementById("city").onblur = enableSubmit;
    document.getElementById("zip").onblur = checkZip;
    document.getElementById("email").onblur = checkEmail;
    // document.getElementById("email").onblur = enableSubmit;
    document.getElementById("tel").onblur = checkPhone;
    //document.getElementById("tel").onblur = enableSubmit;
    document.getElementById("myForm").onchange = enableSubmit;
    document.getElementById("myForm").onblur = enableSubmit;
    document.getElementById("myForm").onkeyup =enableSubmit;
    document.getElementById("myForm").onclick = enableSubmit;
    document.getElementById("myForm").onmousemove = enableSubmit;
    //document.getElementById("myForm").onmousemove = wrappingFunc;
    document.getElementById("birthday").onblur = checkBirthday;
    document.getElementById("myForm").onchange = wrappingFunc;
    document.getElementById("myForm").onsubmit = wrappingFunc;
}