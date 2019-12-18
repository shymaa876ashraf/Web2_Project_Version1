 <?php
$connection = new mysqli("localhost", "root", "rootroot", "localstorage_events");
if($connection->connect_error)
{
 die($connection->connect_error);
}
//echo "the connection is submitted";
if(isset($_POST['load']))
{
    $load=Json_decode($_POST['load'],true);
  //  echo Json_encode($load);
  //  if(count($load)>0)
   // {
        for($i=0;$i<count($load);$i++)
        {
            $content=$load[$i]["content"];
            $ttype=$load[$i]["type"];
            $target=$load[$i]["target"];
            $ddate=$load[$i]["date"];
            $sql = "Insert Into loadss Values('$content','$ttype', '$target', '$ddate')";
            $connection->query($sql);

        }
        if($connection->affected_rows > 0)
        {
    echo "Inserted Successfully";
        }
        else
        {
    echo "Sorry: Problem With Insertion";	
        } 
  //  }
                      
}
if(isset($_POST['unload']))
{
    $unload=Json_decode($_POST['unload'],true);
    echo Json_encode($unload);
     for($i=0;$i<count($unload);$i++)
        {
            $content_un=$unload[$i]["content"];
            $ttype=$unload[$i]["type"];
            $targets=$unload[$i]["target"];
            $date_gen=$unload[$i]["date"];
            $sql = "Insert Into unloadss Values('$content_un','$ttype', '$targets', '$date_gen')";
            $connection->query($sql);

        }
      /*  if($connection->affected_rows > 0)
        {
    echo "Inserted Successfully";
        }
        else
        {
    echo "Sorry: Problem With Insertion";	
        } */
                      
}
if(isset($_POST['generate']))
{
    $generate=Json_decode($_POST['generate'],true);
    echo Json_encode($generate);
      for($i=0;$i<count($generate);$i++)
        {
            $content_un=$generate[$i]["content"];
            $ttype=$generate[$i]["type"];
            $targets=$generate[$i]["target"];
            $date_gen=$generate[$i]["date"];
            $sql = "Insert Into geneatess Values('$content_un','$ttype', '$targets', '$date_gen')";
            $connection->query($sql);

        }
        if($connection->affected_rows > 0)
        {
    echo "Inserted Successfully";
        }
        else
        {
    echo "Sorry: Problem With Insertion";	
        } 
                      
}
if(isset($_POST['letter_generate']))
{
    $letter_generates=Json_decode($_POST['letter_generate'],true);
    echo Json_encode($letter_generates);
          for($i=0;$i<count($letter_generates);$i++)
        {
            $content_lett=$letter_generates[$i]["content"];
            $ttype=$letter_generates[$i]["type"];
            $targets=$letter_generates[$i]["target"];
            $date_letgen=$letter_generates[$i]["date"];
            $sql = "Insert Into lettergenerates Values('$content_lett','$ttype', '$targets', '$date_letgen')";
            $connection->query($sql);

        }
        if($connection->affected_rows > 0)
        {
    echo "Inserted Successfully";
        }
        else
        {
    echo "Sorry: Problem With Insertion";	
        } 
                      
}


////**********************loaddddd
if(isset($_GET['loadss']))
{
    //$loads = json_decode($_GET['loadss'], true);
    $sql="Select * from loadss ";
    if ($result = $connection->query($sql))
    {
        $rows=array();
        if($result->num_rows>0)
        {
              while($row = $result->fetch_assoc()){
                     array_push($rows, $row);
        }
             echo json_encode($rows,true);
            
    }
}
    else
        echo "there is not data is receives";
}
//*******unloaaaaaaaad
if(isset($_GET['unloadss']))
{
    //$loads = json_decode($_GET['loadss'], true);
    $sql="Select * from unloadss ";
    if ($result = $connection->query($sql))
    {
        $rows=array();
        if($result->num_rows>0)
        {
              while($row = $result->fetch_assoc()){
                     array_push($rows, $row);
        }
             echo json_encode($rows,true);
            
    }
}
    else
        echo "there is not data is receives";
}
//***********generatess
if(isset($_GET['geneatess']))
{
    //$loads = json_decode($_GET['loadss'], true);
    $sql="Select * from geneatess ";
    if ($result = $connection->query($sql))
    {
        $rows=array();
        if($result->num_rows>0)
        {
              while($row = $result->fetch_assoc()){
                     array_push($rows, $row);
        }
             echo json_encode($rows,true);
            
    }
}
    else
        echo "there is not data is receives";
}
//**********************letter generates
if(isset($_GET['lettergenerates']))
{
    //$loads = json_decode($_GET['loadss'], true);
    $sql="Select * from lettergenerates ";
    if ($result = $connection->query($sql))
    {
        $rows=array();
        if($result->num_rows>0)
        {
              while($row = $result->fetch_assoc()){
                     array_push($rows, $row);
        }
             echo json_encode($rows,true);
            
    }
}
    else
        echo "there is not data is receives";
}





?>