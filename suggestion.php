<?php 
 $existingnames=array("Danny", "Daniel","Jane");

 if(isset($_POST['suggestion'])){
     $name=$_POST['suggestion'];

     if(!empty($name)){
        foreach($existingnames as $existingname){
            if(strpos($existingname, $name)!==false){
                echo $existingname;
                echo '<br>';
            }
        }
     }

 }
?>