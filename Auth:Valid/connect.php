<?php
    $firslastname = $_POST ['firstlastname'];
    $email = $_POST ['email'];
    $password = $_POST ['password'];
    $confirmpassword = $_POST ['confirmpassword'];
    

    //database connection

    $conn = new mysqli('localhost','root','','auth');
    if($conn -> connect_error){
        die('Connection Failed : '.$conn->error);

    }else{
        $stmt = $conn->prepare("insert into register(firstlastname,email,password,confirmpassword) value(?,?,?,?)");
        $stmt->bind_param("ssss", $firslastname, $email, $password, $confirmpassword);
        $stmt->execute();
        echo"Registartion Successful...";
        $stmt->close();
        $conn->close();
}  
?>