<?php

    if(isset($_POST['Submit'])){
        $dateOfBirth = $_POST['dateOfBirth'];
        $gender = $_POST['gender'];
        $securityQuestion = $_POST['securityQuestion'];
        $phoneNo = $_POST['phoneNo'];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Redirect</title>
</head>
<body>
    <p>Date Of Birth : <?php echo $dateOfBirth; ?></p>
    <p>Gender : <?php echo $gender; ?></p>
    <p>Security Question : <?php echo $securityQuestion; ?></p>
    <p>Phone No : <?php echo $phoneNo; ?></p>
</body>
</html>