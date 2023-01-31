<?php

    //php script for input validation.
    //define variables for error messageS?
    $firstNameErr = $lastNameErr = $userNameErr = $emailErr = $pass1Err = $pass2Err = "";
    $cityErr = $stateErr = $zipErr = $genderErr = $maritalErr = $birthdayErr = $phoneErr = "";
    $address1Err = $address2Err = "";
    //define variables to hold user entered data
    $firstName = $lastName = $userName = $email = $pass1 = $pass2 = "";
    $city = $state = $zip = $address1 = $address2 = $gender = $marital = $birthday = $phone = "";

    $isValid = false;

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $isValid = true;

        //check first name data
        $firstName = cleanInput($_POST["firstname"]);
        if (empty($firstName))
        {
            $firstNameErr = "First Name Required.";
            $isValid = false;
        }
        else
        {
            if (!preg_match("/^[a-zA-Z ]+$/", $firstName))
            {
            				/*
            				The preg_match() function searches a string for pattern,
            				returning true if the pattern exists, and false otherwise.
            				*/
            				$firstNameErr = "Only letters and white space allowed";
            				$isValid = false;
            }
            if(strlen($firstName) > 50)
            {
                $firstNameErr = "Must be less than 51 characters.";
                $isValid = false;
            }
        }

        //check last name data
        $lastName = cleanInput($_POST["lastname"]);
        if (empty($lastName))
        {
            $lastNameErr = "Last Name Required.";
            $isValid = false;
        }
        else
        {
            if (!preg_match("/^[a-zA-Z ]+$/", $lastName))
            {
                $lastNameErr = "Only letters and white space allowed";
                $isValid = false;
            }

            if(strlen($lastName) > 50)
                {
                    $lastNameErr = "Must be less than 51 characters.";
                    $isValid = false;
                }
        }

        //check address 1 data
        $address1 = cleanInput($_POST["address1"]);
        if (empty($address1))
        {
            $address1Err = "Address Required.";
            $isValid = false;
        }
        else
        {
            if (!preg_match("/^[0-9a-zA-Z ]+$/", $address1))
            {
                $address1Err = "Only letters, white space, and numbers allowed";
                $isValid = false;
            }

            if(strlen($address1) > 100)
                {
                    $address1Err = "Must be less than 101 characters.";
                    $isValid = false;
                }
        }

        //check address 2 data
        $address2 = cleanInput($_POST["address2"]);
        if(!empty($address2))
        {
            if (!preg_match("/^[0-9a-zA-Z ]+$/", $address2))
            {
                $address2Err = "Only letters, white space, and numbers allowed";
                $isValid = false;
            }

            if(strlen($address2) > 100)
                {
                    $address2Err = "Must be less than 101 characters.";
                    $isValid = false;
                }
        }

        //check city data
        $city = cleanInput($_POST["city"]);
        if(empty($city))
        {
            $cityErr = "City Required.";
            $isValid = false;
        }
        else
        {
            if(strlen($city) > 50)
            {
                $cityErr = "Must be less than 51 characters.";
                $isValid = false;
            }
        }

        //check state data
        if (isset($_POST["state"]))
        {
            $state = cleanInput($_POST["state"]);
            if(empty($_POST["state"]))
            {
                $stateErr = "State Required.";
                $isValid = false;
            }
        }
        else
        {
            $stateErr = "State Required.";
            $isValid = false;
        }

        //check zip data
        $zip = cleanInput($_POST["zip"]);

        if(empty($zip))
        {
            $zipErr = "Zip Required.";
            $isValid = false;
        }
        else
        {
            if (!preg_match("/^[0-9]+$/", $zip))
            {
                $zipErr = "Can only contain digits.";
                $isValid = false;
            }

            if(strlen($zip) > 10 || strlen($zip) < 5)
            {
                $zipErr = "Must be between 5-10 characters.";
                $isValid = false;
            }
        }

        //check username data
        $userName = cleanInput($_POST["username"]);

        if(empty($userName))
        {
            $userNameErr = "UserName Required.";
            $isValid = false;
        }
        else
        {
            if(strlen($userName) > 50 || strlen($userName) < 6) //seems to work for checking length
            {
                $userNameErr = "Must be between 6-50 characters";
                $isValid = false;
            }
        }

        //check initial password data
        $pass1 = cleanInput($_POST["password"]);
        if (empty($pass1))
        {
            $pass1Err = "Password Required.";
            $isValid = false;
        }
        else
        {
            if(!preg_match("/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_).*)$/", $pass1))
            {
                $pass1Err = "Password must contain at least 1 capital letter, 1 lowercase letter, 1 digit, and 1 special character.";
                $isValid = false;
            }

            if(strlen($pass1) > 50 || strlen($pass1) < 8)
            {
                $pass1Err = "Must be between 8-50 characters.";
                $isValid = false;
            }
        }

        //check password confirmation data
        $pass2 = cleanInput($_POST["password2"]);
        if (empty($pass2))
        {
            $pass2Err = "Password Confirmation Required.";
            $isValid = false;
        }
        else
        {
            if($pass2 != $pass1)
            {
                $pass2Err = "Passwords do not match, please re-type.";
                $isValid = false;
            }

           /* if(!preg_match("/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_).*)$/", $pass2))
                {
                    $pass2Err = "Password must contain at least 1 capital letter, 1 lowercase letter, 1 digit, and 1 special character.";
                    $isValid = false;
                } */

           /* if(strlen($pass2) > 50 || strlen($pass2) < 8)
                {
                    $pass2Err = "Must be between 8-50 characters.";
                    $isValid = false;
                }*/
        }

        //check email data
        $email = cleanInput($_POST["email"]);
        if (empty($email))
        {
            $emailErr = "Email Required.";
            $isValid = false;
        }
        else
        {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $emailErr = "Invalid email format.";
                $isValid = false;
            }
        }

        //check phone-number data
        $phone = cleanInput($_POST["tel"]);
        if(empty($phone))
        {
            $phoneErr = "Phone Number Required.";
            $isValid = false;
        }
        else
        {
            if(!preg_match("/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/", $phone))
            {
                $phoneErr = "Invalid phone-number format.";
                $isValid = false;
            }

            if(strlen($phone) > 12)
            {
                $phoneErr = "Must be less than 13 characters";
                $isValid = false;
            }
        }

        //check gender data
        if(isset($_POST["gender"]))
        {
            $gender = cleanInput($_POST["gender"]);
            if(empty($gender))
            {
                $genderErr =  "Gender Required.";
                $isValid = false;
            }
        }
        else
        {
             $genderErr =  "Gender Required.";
             $isValid = false;
        }

        if(isset($_POST["status"]))
               {
                   $marital = cleanInput($_POST["status"]);
                   if(empty($marital))
                   {
                       $maritalErr =  "Marital Status Required.";
                       $isValid = false;
                   }
               }
               else
               {
                    $maritalErr =  "Marital Status Required.";
                    $isValid = false;
               }

        $birthday = cleanInput($_POST["birthday"]);
        if(empty($birthday))
        {
            $birthdayErr = "Birth Date Required.";
            $isValid = false;
        }


    }

    function cleanInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>