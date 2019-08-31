



<?php


$con = mysqli_connect('35.247.233.20','arduino','erickgostoso','banco1');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"ajax_demo");
$sql="select temp from temperature where data = (select max(data) from temperature)";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
 
    echo  $row['temp'] ;

}

mysqli_close($con);
?>
