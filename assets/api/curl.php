<?php
$name=$_POST["name"]; 
$email=$_POST["email"]; 
$phone=$_POST["phone"]; 
$address=$_POST["address"]; 
$requirement=$_POST["requirement"]; 
$feedback=$_POST["feedback"]; 

$name = urlencode($name);
$email = urlencode($email);
$phone = urlencode($phone);
$address = urlencode($address);
$requirement = urlencode($requirement);

// echo"$name ,$email, $phone ,$address, $requirement";
$url = "https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=$name&phone=$phone&email=$email&address=$address&requirement=$requirement";


// while ($url !== null) {
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    // CURLOPT_POSTFIELDS => http_build_query($data),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/x-www-form-urlencoded'
    )
));

$response = curl_exec($curl);
curl_close($curl);

  header("Location: https://www.triohims.com/ThankYou.html");
  exit;


?>