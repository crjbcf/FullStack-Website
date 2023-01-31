<!DOCTYPE html>
<?php
    include 'connectionInfo.php';
?>
<html lang = "en">
<head>
    <title>Registration</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/stylesheet1.css">
    <link href="./css/stylesheet2.css"
          rel="stylesheet" type="text/css"/>
    <link href="./css/regexstyle.css"
          rel="stylesheet" type="text/css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="./js/formValidate.js"></script>
</head>
<body class="registration" onload="registerHandlers();">
<?php
    include 'inputValidation.php';
?>
<?php
    include 'insertValidData.php';
?>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="../project3_3010/projhome.html" target="_blank"><img src="./img/macross-kite.png" alt="macross logo" height="30px" width="30px"/></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <!--<li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>-->
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <!--<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>-->
            </ul>
        </div>
    </div>
</nav>

<div class="container-fluid text-center">
    <div class="row content">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 sidenav">
            <p><a href="../project3_3010/projhome.html" target="_blank" style="color: yellow;">Home</a></p>
            <p><a href="../project3_3010/projregistration.php" target="_blank" style="color: yellow;">Registration</a></p>
            <p><a href="../project3_3010/projanimation.html" target="_blank" style="color: yellow;">Animation</a></p>
        </div>
        <form method="POST" id="myForm" name="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 text-left">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6">
                        <div class="form-group" id="firstNameDiv">
                            <label for="firstname">First Name:</label>
                            <input id="firstname" name="firstname" class="form-control"
                                   type="text" placeholder="John" value="<?php echo $firstName;?>"/>
                           <span id="fNameErr" class="help-block hide">This is a Required Field.
                                Please enter a first name.</span>
                            <span class="error">* <?php echo $firstNameErr;?></span>
                        </div>
                        <div class="form-group" id ="lastNameDiv">
                            <label for="lastname">Last Name:</label>
                            <input id="lastname" name="lastname" class="form-control"
                                   type="text" placeholder="Doe" value="<?php echo $lastName;?>"/>
                           <span id="lNameErr" class="help-block hide">This is a Required Field.
                                Please enter a last name.</span>
                            <span class="error">* <?php echo $lastNameErr;?></span>
                        </div>
                        <div class="form-group" id="address1Div">
                            <label for="address1">Address Line 1:</label>
                            <input id="address1" name="address1" class="form-control"
                                   type="text" placeholder="1234 Happy St." value="<?php echo $address1;?>"/>
                            <span id="add1Err" class="help-block hide">This is a Required Field.
                                Please enter an address.</span>
                            <span class="error">* <?php echo $address1Err;?></span>
                        </div>
                        <div class="form-group" id="address2Div">
                            <label for="address2">Address Line 2:</label>
                            <input id="address2" name="address2" class="form-control"
                                   type="text" placeholder="1234 unHappy St." value="<?php echo $address2;?>"/>
                            <span>Optional</span>
                            <span class="error">* <?php echo $address2Err;?></span>
                        </div>
                        <div class="form-group" id="cityDiv">
                            <label for="city">City:</label>
                            <input id="city" name="city" class="form-control"
                                   type="text" placeholder="St. Louis" value="<?php echo $city; ?>"/>
                            <span id="cityErr" class="help-block hide">This is a Required Field.
                                Please enter a city.</span>
                            <span class="error">* <?php echo $cityErr;?></span>

                        </div>
                        <div class="form-group" id="stateDiv">
                            <label for="state">State:</label>
                            <select id="state" name="state" class="form-control">
                                <option value="<?php echo $state;?>" selected="selected" hidden="hidden" disabled="disabled">
                                    --Please Select--
                                </option>
                                <option value="CA">California</option>
                                <option value="MO">Missouri</option>
                                <option value="NY">New York</option>
                                <option value="OR">Oregon</option>
                            </select>
                            <span id="stateErr" class="help-block hide">This is a Required Field.
                                Please select a State.</span>
                            <span class="error">*<?php echo $stateErr;?></span>
                        </div>
                        <div class="form-group" id="zipDiv">
                            <label for="zip">Zip:</label>
                            <input id="zip" name="zip" class="form-control"
                                   type="text" placeholder="xxxxx" value="<?php echo $zip?>"/>
                            <span id="zipErr" class="help-block hide">This is a Required Field.
                                Please enter a Zip code.</span>
                            <span class="error">* <?php echo $zipErr;?></span>
                        </div>
                        <div class="form-group" id="birthDiv">
                            <label for="birthday">Date of Birth:</label>
                            <input id="birthday" name="birthday" class="form-control"
                                   type="date"/>
                            <span class="error">*<?php echo $birthdayErr;?></span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6">
                        <div class="form-group" id="usernameDiv">
                            <label for="username">Username:</label>
                            <input id="username" name="username" class="form-control"
                                   type="text" placeholder="Hikaru92" value="<?php echo $userName; ?>"/>
                            <span id="uNameErr" class="help-block hide">This is a Required Field.
                                Please enter a username.</span>
                            <span class="error">*<?php echo $userNameErr;?></span>
                        </div>
                        <div class="form-group" id="passDiv">
                            <label for="password">Password:</label>
                            <input id="password" name="password" class="form-control"
                                   type="password" value="<?php echo $pass1;?>"/>
                            <span id="passErr" class="help-block hide">You did not enter a password.
                                Please enter one now.</span>
                            <span class="error">*<?php echo $pass1Err;?></span>
                            <p id="passMsg"></p>
                        </div>
                        <div class="form-group" id="pass2Div">
                            <label for="password2">Confirm Password:</label>
                            <input id="password2" name="password2" class="form-control"
                                   type="password" value="<?php echo $pass2;?>"/>
                            <span id="pass2Err" class="help-block hide">The two passwords you entered are not the same.
                                Please re-enter both now.</span>
                            <span class="error">*<?php echo $pass2Err;?></span>
                        </div>
                        <div class="form-group" id="emailDiv">
                            <label for="email">Email:</label>
                            <input id="email" name="email" class="form-control"
                                   type="email" placeholder="email@domain.com" value="<?php echo $email;?>"/>
                            <span class="error">*<?php echo $emailErr; ?></span>
                            <p id="emailMsg"></p>
                        </div>
                        <div class="form-group" id="phoneDiv">
                            <label for="tel">Phone:</label>
                            <input id="tel" name="tel" class="form-control"
                                   type="tel" placeholder="xxx-xxx-xxxx" value="<?php echo $phone;?>"/>
                            <span class="error">*<?php echo $phoneErr;?></span>
                            <p id="phoneMsg"></p>
                        </div>
                        <div class="form-group" id="maritalDiv">
                            <p><b>Marital Status</b></p>
                            <input type="radio" name="status" id="single" value="single"
                             <?php if($marital == "single"){echo "checked";} ?> />
                            <label for="single">Single</label><br/>
                            <input type="radio" name="status" id="married" value="married"
                             <?php if($marital == "married"){echo "checked";} ?> />
                            <label for="married">Married</label><br/>
                            <input type="radio" name="status" id="divorced" value="divorced"
                             <?php if($marital == "divorced"){echo "checked";} ?> />
                            <label for="divorced">Divorced</label><br/>
                            <input type="radio" name="status" id="widowed" value="widowed"
                             <?php if($marital == "widowed"){echo "checked";} ?> />
                            <label for="widowed">Widowed</label><br/>
                            <span class="error">*<?php echo $maritalErr;?></span>
                            <span id="maritalErr" class="help-block hide">This is a Required Field.
                                Please choose marital status.</span>
                        </div>
                        <div class="form-group" id="genderDiv">
                            <p><b>Gender</b></p>
                            <input type="radio" name="gender" id="maleGender" value="male"
                              <?php if($gender == "male"){echo "checked";} ?> />
                            <label for="maleGender">Male</label><br/>
                            <input type="radio" name="gender" id="femaleGender" value="female"
                              <?php if($gender == "female"){echo "checked";} ?> />
                            <label for="femaleGender">Female</label><br/>
                            <input type="radio" name="gender" id="otherGender" value="other"
                              <?php if($gender == "other"){echo "checked";} ?> />
                            <label for="otherGender">Other</label>
                            <span class="error">*<?php echo $genderErr;?></span>
                            <span id="genderErr" class="help-block hide">This is a Required Field.
                                Please specify a gender.</span>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Submit Button" id="submitButton"
                               disabled="disabled">

                        <input type="reset" class="btn btn-info" value="Reset Button">
                    </div>
                </div>
            </div>
        </form>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="img-div1"></div>
                    <img class="img-responsive" src="./img/minmay.gif"  alt="picture of Lynn Minmay"/>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
