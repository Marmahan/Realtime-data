<?php 


if(empty($_POST['myfname']) && empty($_POST['mylname']) && empty($_POST['mypassword']) && empty($_POST['myemail'])){

    // $name=$_POST['suggestion'];

    //  if(!empty($name)){
    //     foreach($existingnames as $existingname){
    //         if(strpos($existingname, $name)!==false){
    //             echo $existingname;
    //             echo '<br>';
    //         }
    //     }
    //  }
    echo "Error";
 }
 else{
    echo "Registration is succesful!";
 }
?>