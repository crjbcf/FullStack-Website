<!DOCTYPE html>
<?php
    include 'connectionInfo.php';
?>
<?php
    include 'inputValidation.php';
?>

<html>
	<head>
	    <?php define("title", "PDO"); ?>
	    <title><?php echo title; ?></title>
	    <meta charset = "utf-8" />
	</head>
	<body>
	    <h1><?php echo title ?></h1>
		    <br/>
		    <?php
			    include 'selectUserData.php';
		    ?>
	    <h2>PDO FORM CONFIRMATION</h2>
	    <form method="POST"  name="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>

	        <label for="firstname">First Name:</label>
            <input disabled id="firstname" name="firstname" class="form-control"
             type="text" placeholder="John" value="<?php echo $firstName; ?>"/>
            <br/><br/>

            <label for="lastname">Last Name:</label>
            <input disabled id="lastname" name="lastname" class="form-control"
             type="text" placeholder="Doe" value="<?php echo $lastName; ?>"/>
            <br/><br/>

            <label for="address1">Address Line 1:</label>
            <input disabled id="address1" name="address1" class="form-control"
             type="text" placeholder="1234 Happy St." value="<?php echo $address1; ?>"/>
            <br/><br/>

            <label for="address2">Address Line 2:</label>
            <input disabled id="address2" name="address2" class="form-control"
             type="text" placeholder="1234 unHappy St." value="<?php if($address2 == null) {echo "none";} else echo $address2; ?>"/>
            <span>Optional</span>
            <br/><br/>

            <label for="city">City:</label>
            <input disabled id="city" name="city" class="form-control"
             type="text" placeholder="St. Louis" value="<?php echo $city; ?>"/>
            <br/><br/>

            <label for="state">State:</label>
            <select disabled id="state" name="state" class="form-control">
                <option selected="selected" hidden="hidden" disabled="disabled">
                    --Please Select--
                <?php if($state == "CA" || $state == "MO" || $state == "NY" || $state == "OR") {echo "selected: " . $state;} ?>
                </option>
                <option value="CA">California</option>
                <?php if($state == "CA") {echo "$state";} ?>
                <option value="MO">Missouri</option>
                <?php if($state == "MO") {echo "$state";} ?>
                <option value="NY">New York</option>
                <?php if($state == "NY") {echo "$state";} ?>
                <option value="OR">Oregon</option>
                <?php if($state == "OR") {echo "$state";} ?>
            </select>
            <br/><br/>

            <label for="zip">Zip:</label>
            <input disabled id="zip" name="zip" class="form-control"
             type="text" placeholder="xxxxx" value="<?php echo $zip ?>"/>
            <br/><br/>

            <label for="birthday">Date of Birth:</label>
            <input disabled id="birthday" name="birthday" class="form-control"
             type="date" value="<?php echo $birthday ?>"/>
            <br/><br/>

            <label for="username">Username:</label>
            <input disabled id="username" name="username" class="form-control"
             type="text" placeholder="Hikaru92" value="<?php echo $userName; ?>"/>
            <br/><br/>

            <label for="password">Password:</label>
            <input disabled id="password" name="password" class="form-control"
             type="password" value="<?php echo $pass1; ?>"/>
            <br/><br/>

            <label for="email">Email:</label>
            <input disabled id="email" name="email" class="form-control"
             type="email" placeholder="email@domain.com" value="<?php echo $email; ?>"/>
            <br/><br/>

            <label for="tel">Phone:</label>
            <input disabled id="tel" name="tel" class="form-control"
             type="tel" placeholder="xxx-xxx-xxxx" value="<?php echo $phone; ?>"/>
            <br/><br/>

            <p><b>Marital Status</b></p>
            <input disabled type="radio" name="status" id="single" value="single"
            <?php if($marital == "single"){echo "checked";} ?> />
            <label for="single">Single</label><br/>
            <input disabled type="radio" name="status" id="married" value="married"
            <?php if($marital == "married"){echo "checked";} ?> />
            <label for="married">Married</label><br/>
            <input disabled type="radio" name="status" id="divorced" value="divorced"
            <?php if($marital == "divorced"){echo "checked";} ?> />
            <label for="divorced">Divorced</label><br/>
            <input disabled type="radio" name="status" id="widowed" value="widowed"
            <?php if($marital == "widowed"){echo "checked";} ?> />
            <label for="widowed">Widowed</label><br/>
            <br/><br/>

            <p><b>Gender</b></p>
            <input disabled type="radio" name="gender" id="maleGender" value="male"
            <?php if($gender == "male"){echo "checked";} ?> />
            <label for="maleGender">Male</label><br/>
            <input disabled type="radio" name="gender" id="femaleGender" value="female"
            <?php if($gender == "female"){echo "checked";} ?> />
            <label for="femaleGender">Female</label><br/>
            <input disabled type="radio" name="gender" id="otherGender" value="other"
            <?php if($gender == "other"){echo "checked";} ?> />
            <label for="otherGender">Other</label>
            <br/><br/>

            <input disabled type="submit" class="btn btn-primary" value="Submit Button" id="submitButton" >
            <input disabled type="reset" class="btn btn-info" value="Reset Button">

        </form>
	</body>
</html>
