<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Html Practice 8</title>
</head>
<body>
    <div>
        <fieldset>
            <form action="redirect.php" method="post">
                <div>
                    <p>Personal Information</p>
                    <div>
                        <label for="firstName">First Name : </label>
                        <input type="text" name="fistName" id="firstName">
                    </div>
                    <div>
                        <label for="lastName">Last Name : </label>
                        <input type="text" name="lastName" id="lastName">
                    </div>
                    <div>
                        <label for="dateOfBirth">Date Of Birth : </label>
                        <input type="date" name="dateOfBirth" id="dateOfBirth">*
                    </div>
                    <div>
                        <label for="gender">Gender : </label>
                        <select name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>*
                    </div>
                </div>
                <div>
                    <p>Account Information</p>
                    <div>
                        <label for="emailId">Email : </label>
                        <input type="email" name="emailId" id="emailId"><br>
                        (Your Email address will be your Username)
                    </div>
                    <div>
                        <label for="reEnterEmail">Re-Type Email : </label>
                        <input type="email" name="reEnterEmail" id="reEnterEmail">
                    </div>
                    <div>
                        <label for="password">Password : </label>
                        <input type="password" name="password" id="password"><br>
                        (Min 8 Characters, 1 number, case-sensitive)
                    </div>
                    <div>
                        <label for="confirmPassword">Re-type Password : </label>
                        <input type="password" name="confirmPassword" id="confirmPassword">
                    </div>
                    <div>
                        <label for="securityQuestion">Select Security Question : </label>
                        <select name="securityQuestion" id="securityQuestion">
                            <option value="any">Choose your security Question</option>
                            <option value="nickName">What is Your Nick Name ?</option>
                            <option value="petName">Whats is Your Pet Name ?</option>
                            <option value="specialCharcter">Any Special Character ? </option>
                        </select>*
                    </div>
                    <div>
                        <label for="securityAnswer">Security Answer : </label>
                        <input type="text" name="securityAnswer" id="securityAnswer">
                    </div>
                </div>
                <div>
                    <p>Contact Information</p>

                    <div>
                        <label for="address">Address</label>
                        <textarea name="address" id="address" cols="22" rows="3"></textarea>
                    </div>
                    <div>
                        <label for="city">City : </label>

                        <input type="text" name="city" id="city" list="cities">
                        <datalist id="cities">
                            <option value="Ahamedabad">Ahamedabad</option>
                            <option value="Rajkot">Rajkot
                            <option value="Surat">Surat
                            <option value="Gandhinagar">Gandhinagar
                            <option value="Baroda">Baroda
                        </datalist>
                    </div>
                    <div>
                        <label for="state">State : </label>

                        <input type="text" name="state" id="state" list="stateList">
                        <datalist id="stateList">
                            <option value="Gujarat">Gujarat</option>
                            <option value="Maharastra">Maharastra
                            <option value="Panjab">Panjab
                        </datalist>
                    </div>
                    <div>
                        <label for="zinCode">Zip Code : </label>
                        <input type="number" name="zipCode" id="zipCode">
                    </div>
                    <div>
                        <label for="phoneNo">Phone Number : </label>
                        <input type="number" name="phoneNo" id="phoneNo">*
                        <select name="phoneType" id="phoneType">
                            <option value="mobile">Mobile</option>
                            <option value="lanLine">Lan Line</option>
                        </select><br>
                        (no spaces or dashes)
                    </div>
                </div>
                <div>
                    <input type="submit" onclick="validRequeridField()" name="Submit" value="Submit">
                    <input type="reset" value="Clear">
                </div>
            </form>
        </fieldset>
    </div>
    <script src="app.js"></script>
</body>
</html>