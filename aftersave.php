<?php

if($_POST) {

   $name = trim(stripslashes($_POST['company_name']));
   $prefix = trim(stripslashes($_POST['prefix-1']));
   $firstname = trim(stripslashes($_POST['first_name-1']));
   $lastname = trim(stripslashes($_POST['last_name-1']));
   
   $mobilenumber1 = trim(stripslashes($_POST['mobile_number-1']));
   $mobilenumber2 = trim(stripslashes($_POST['mobile_number_2-1']));
   $email1 = trim(stripslashes($_POST['email-1']));
   $email2 = trim(stripslashes($_POST['email_2-1']));
   
   $addressline1 = trim(stripslashes($_POST['address_line_1-1']));
   $addressline2 = trim(stripslashes($_POST['address_line_2-1']));
   $country1 = trim(stripslashes($_POST['country-1']));
   $state1 = trim(stripslashes($_POST['state-1']));

   $name = trim(stripslashes($_POST['company_name']));
   $prefix = trim(stripslashes($_POST['prefix-1']));
   $firstname = trim(stripslashes($_POST['first_name-1']));
   $lastname = trim(stripslashes($_POST['last_name-1']));
   

}

?>