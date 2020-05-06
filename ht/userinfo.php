<?php
session_start();

// variable declaration
$name = "";
$email = "";
$phone = "";
$gender = "";

$errors = array(); 
$_SESSION['success'] = "";

// Database Variable Declaration
$servername = "localhost";
$username = "userinfo";
$password = "";

// Create connection
$db = mysqli_connect($servername, 'root', '', $username);   
 
// Check connection
  if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

//LOGIN SECTION
// REGISTER USER
if (isset($_POST['in'])) {
    // receive all input values from the form
        $name = mysqli_real_escape_string($db, $_POST['name']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        $phone = mysqli_real_escape_string($db, $_POST['phone']);
        $gender = mysqli_real_escape_string($db, $_POST['gender']);
    // form validation: ensure that the form is correctly filled

        if (empty($name)) { array_push($errors, "Name is required"); }
        if (empty($email)) { array_push($errors, "Email is required"); }
        if (empty($phone)) { array_push($errors, "Phone number is required"); }
        if (empty($gender)) { array_push($errors, "Gender is required"); }
    // register user if there are no errors in the form
        if (count($errors) == 0) {
            $query = "INSERT INTO userinfo_table (name,email,phone,gender) 
                        VALUES('$name','$email','$phone','$gender')";
            mysqli_query($db, $query);
            $_SESSION['name'] = $name;
            $_SESSION['success'] = "You are now logged in";
            echo 'You are now logged in.';
            header('location: http://bishal-shrestha.com.np/');
        }
}
?>