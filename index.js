var count_for_row = 1;
$('#after-radio').hide();
$('#yes-radio-after').hide();
$('#no-radio-after').hide();
$('#after-radio-labelyes').hide();
$('#after-radio-labelno').hide();
$('#state-1').find('option').hide();
$('#state-2').find('option').hide();
$("#country-1").change(function (){
    $('#state-1').find('option').show();
});
$("#country-2").change(function (){
    $('#state-2').find('option').show();
});

var district = [];
district.push([ 'Andhra Pradesh', 'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Kadapa', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari']);
district.push([ 'Andaman and Nicobar Islands', 'Nicobars','North & Middle Andaman','South Andaman' ]);
district.push([ 'Arunachal Pradesh', 'Anjaw', 'Changlang','Dibang Valley','East Kameng','East Siang','Kurung Kumey','Lohit','Lower Dibang Valley','Lower Subansiri','Papum Pare','Tawang','Tirap','Upper Siang','Upper Subansiri','West Kameng','West Siang']);
district.push([ 'Assam','Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao (North Cachar Hills)','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat','Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salamara-Mankachar','Tinsukia','Udalguri','West Karbi Anglong' ]);
district.push([ 'Bihar','Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran (Motihari)','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur (Bhabua)','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger (Monghyr)','Muzaffarpur','Nalanda','Nawada','Patna','Purnia (Purnea)','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran' ]);
district.push([ 'Chandigarh', 'Chandigarh']);
district.push([ 'Chhattisgarh','Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada (South Bastar)','Dhamtari','Durg','Gariyaband','Janjgir-Champa','Jashpur','Kabirdham (Kawardha)','Kanker (North Bastar)','Kondagaon','Korba','Korea (Koriya)','Mahasamund','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sukma','Surajpur','Surguja' ]);
district.push([ 'Dadra and Nagar Haveli','Dadra & Nagar Haveli']);
district.push([ 'Daman and Diu','Daman','Diu' ]);
district.push([ 'Goa', 'North Goa','South Goa' ]);
district.push([ 'Gujarat', 'Ahmedabad','Amreli','Anand','Aravalli','Banaskantha (Palanpur)','Bharuch','Bhavnagar','Botad','Chhota Udepur','Dahod','Dangs (Ahwa)','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kachchh','Kheda (Nadiad)','Mahisagar','Mehsana','Morbi','Narmada (Rajpipla)','Navsari','Panchmahal (Godhra)','Patan','Porbandar','Rajkot','Sabarkantha (Himmatnagar)','Surat','Surendranagar','Tapi (Vyara)','Vadodara','Valsad']);
district.push([ 'Haryana', 'Ambala','Bhiwani','Charkhi Dadri','Faridabad','Fatehabad','Gurugram (Gurgaon)','Hisar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamunanagar' ]);
district.push([ 'Himachal Pradesh','Bilaspur','Chamba','Hamirpur','Kangra','Kinnaur','Kullu','Lahaul & Spiti','Mandi','Shimla','Sirmaur (Sirmour)','Solan','Una' ]);
district.push([ 'Jammu and Kashmir', 'Anantnag','Bandipore','Baramulla','Budgam','Doda','Ganderbal','Jammu','Kargil','Kathua','Kishtwar','Kulgam','Kupwara','Leh','Poonch','Pulwama','Rajouri','Ramban','Reasi','Samba','Shopian','Srinagar','Udhampur' ]);
district.push([ 'Jharkhand','Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singhbhum','Garhwa','Giridih','Godda','Gumla','Hazaribag','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahibganj','Seraikela-Kharsawan','Simdega','West Singhbhum' ]);
district.push([ 'Karnataka','Bagalkot','Ballari (Bellary)','Belagavi (Belgaum)','Bengaluru (Bangalore) Rural','Bengaluru (Bangalore) Urban','Bidar','Chamarajanagar','Chikballapur','Chikkamagaluru (Chikmagalur)','Chitradurga','Dakshina Kannada','Davangere','Dharwad','Gadag','Hassan','Haveri','Kalaburagi (Gulbarga)','Kodagu','Kolar','Koppal','Mandya','Mysuru (Mysore)','Raichur','Ramanagara','Shivamogga (Shimoga)','Tumakuru (Tumkur)','Udupi','Uttara Kannada (Karwar)','Vijayapura (Bijapur)','Yadgir' ]);
district.push([ 'Kerala', 'Alappuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Malappuram','Palakkad','Pathanamthitta','Thiruvananthapuram','Thrissur','Wayanad']);
district.push([ 'Lakshadweep','Lakshadweep']);
district.push([ 'Madhya Pradesh', 'Agar Malwa','Alirajpur','Anuppur','Ashoknagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Hoshangabad','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Mandla','Mandsaur','Morena','Narsinghpur','Neemuch','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha']);
district.push([ 'Maharashtra','Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal']);
district.push([ 'Manipur','Bishnupur','Chandel','Churachandpur','Imphal East','Imphal West','Jiribam','Kakching','Kamjong','Kangpokpi','Noney','Pherzawl','Senapati','Tamenglong','Tengnoupal','Thoubal','Ukhrul']);
district.push([ 'Meghalaya','East Garo Hills','East Jaintia Hills','East Khasi Hills','North Garo Hills','Ri Bhoi','South Garo Hills','South West Garo Hills','South West Khasi Hills','West Garo Hills','West Jaintia Hills','West Khasi Hills']);
district.push([ 'Mizoram', 'Aizawl','Champhai','Kolasib','Lawngtlai','Lunglei','Mamit','Saiha','Serchhip']);
district.push([ 'Nagaland','Dimapur','Kiphire','Kohima','Longleng','Mokokchung','Mon','Peren','Phek','Tuensang','Wokha','Zunheboto' ]);
district.push([ 'NCT of Delhi', 'Central Delhi','East Delhi','New Delhi','North Delhi','North East Delhi','North West Delhi','South Delhi','South East Delhi','South West Delhi','West Delhi']);
district.push([ 'Odisha', 'Angul','Balangir','Balasore','Bargarh','Bhadrak','Boudh','Cuttack','Deogarh','Dhenkanal','Gajapati','Ganjam','Jagatsinghapur','Jajpur','Jharsuguda','Kalahandi','Kandhamal','Kendrapara','Kendujhar (Keonjhar)','Khordha','Koraput','Malkangiri','Mayurbhanj','Nabarangpur','Nayagarh','Nuapada','Puri','Rayagada','Sambalpur','Sonepur','Sundargarh']);
district.push([ 'Puducherry', 'Karaikal','Mahe','Puducherry','Yanam']);
district.push([ 'Punjab','Amritsar','Barnala','Bathinda','Faridkot','Fatehgarh Sahib','Fazilka','Ferozepur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Muktsar','Nawanshahr (Shahid Bhagat Singh Nagar)','Pathankot','Patiala','Rupnagar','Sahibzada Ajit Singh Nagar (Mohali)','Sangrur','Tarn Taran']);
district.push([ 'Rajasthan','Ajmer','Alwar','Banswara','Baran','Barmer','Bharatpur','Bhilwara','Bikaner','Bundi','Chittorgarh','Churu','Dausa','Dholpur','Dungarpur','Hanumangarh','Jaipur','Jaisalmer','Jalore','Jhalawar','Jhunjhunu','Jodhpur','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sawai Madhopur','Sikar','Sirohi','Sri Ganganagar','Tonk','Udaipur' ]);
district.push([ 'Sikkim','East Sikkim','North Sikkim','South Sikkim','West Sikkim']);
district.push([ 'Tamil Nadu','Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kanchipuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Thanjavur','Theni','Thoothukudi (Tuticorin)','Tiruchirappalli','Tirunelveli','Tirupathur','Tiruppur','Tiruvallur','Tiruvannamalai','Tiruvarur','Vellore','Viluppuram','Virudhunagar' ]);
district.push([ 'Telangana','Adilabad','Bhadradri Kothagudem','Hyderabad','Jagtial','Jangaon','Jayashankar Bhoopalpally','Jogulamba Gadwal','Kamareddy','Karimnagar','Khammam','Komaram Bheem Asifabad','Mahabubabad','Mahabubnagar','Mancherial','Medak','Medchal','Nagarkurnool','Nalgonda','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Rangareddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal (Rural)','Warangal (Urban)','Yadadri Bhuvanagiri']);
district.push([ 'Tripura','Dhalai','Gomati','Khowai','North Tripura','Sepahijala','South Tripura','Unakoti','West Tripura']);
district.push([ 'Uttar Pradesh','Agra','Aligarh','Allahabad','Ambedkar Nagar','Amethi (Chatrapati Sahuji Mahraj Nagar)','Amroha (J.P. Nagar)','Auraiya','Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Firozabad','Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur (Panchsheel Nagar)','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kanshiram Nagar (Kasganj)','Kaushambi','Kushinagar (Padrauna)','Lakhimpur - Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','RaeBareli','Rampur','Saharanpur','Sambhal (Bhim Nagar)','Sant Kabir Nagar','Shahjahanpur','Shamali (Prabuddh Nagar)','Shravasti','Siddharth Nagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi']);
district.push([ 'Uttarakhand','Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi']);
district.push([ 'West Bengal','Alipurduar','Bankura','Birbhum','Cooch Behar','Dakshin Dinajpur (South Dinajpur)','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Malda','Murshidabad','Nadia','North 24 Parganas','Paschim Medinipur (West Medinipur)','Paschim (West) Burdwan (Bardhaman)','Purba Burdwan (Bardhaman)','Purba Medinipur (East Medinipur)','Purulia','South 24 Parganas','Uttar Dinajpur (North Dinajpur)']);


 $("#state-1").change(function (){
    $('#district-1').children('option').remove();
    var selected_value =  $( "#state-1 option:selected" ).text();
    for(var i=0;i<district.length;i++){
        if(district[i][0] == selected_value)
        {
            $('#district-1').append('<option values"Select a District" selected>Select a District</option>');
            for(var j=1;j<district[i].length;j++){                
                $('#district-1').append('<option value="'+district[i][j]+'">'+district[i][j]+'</option>');
            }
        }
    }
});
$("#state-2").change(function (){
    $('#district-2').children('option').remove();
    var selected_value =  $( "#state-2 option:selected" ).text();
    for(var i=0;i<district.length;i++){
        if(district[i][0] == selected_value)
        {
            $('#district-2').append('<option values"Select a District" selected>Select a District</option>');
            for(var j=1;j<district[i].length;j++){                
                $('#district-2').append('<option value="'+district[i][j]+'">'+district[i][j]+'</option>');
            }
        }
    }
});
list = [1];
$('#new-row').click(function(){
    count_for_row+=1;
    list.push(count_for_row);
    $('.table-container').append('<div id="'+count_for_row+'-row" class="row row-after"><div class="col-sm-1"><input id="Srno_'+count_for_row+'-row" class ="form-control" type="text" autocomplete="off" required></div><div class="col-sm-2"><input id="HSN_'+count_for_row+'-row" class ="form-control" type="text" autocomplete="off" required></div><div class="col-sm-3"><input id="description_'+count_for_row+'-row" class ="form-control" type="text" autocomplete="off" required></div><div class="col-sm-4"><input id="address_'+count_for_row+'-row" class ="form-control" type="text" autocomplete="off" required></div><div class="col-sm-1 delete-row"><i id="'+count_for_row+'" class="far fa-trash-alt"></i></div></div>');
})
$('i').click(function () {
    var id = $(this).attr('id');
    $('#'+id+'-row').remove();
    count_for_row-=1;
});
$('#new-row').click(function(){
    $('i').click(function () {
        var id = $(this).attr('id');
        console.log('delete row is ' + id);
        $('#'+id+'-row').remove();
        for( var i = 0; i < list.length; i++){
            if ( list[i].toString() === id) { 
                list.splice(i, 1); 
               }
           }
        console.log(list);    
    });
})
$('#yes-radio').click(function(){
    if($('#yes-radio').val()=="on"){
        $('#no-radio').prop('checked',false);
        $('#after-radio').show();
        $('#yes-radio-after').show();
        $('#no-radio-after').show();
        $('#after-radio-labelyes').show();
        $('#after-radio-labelno').show();
    }
});
$('#no-radio').click(function(){
    if($('#no-radio').val()=="on"){
        $('#yes-radio').prop('checked',false);
        $('#after-radio').hide();
        $('#yes-radio-after').hide();
        $('#no-radio-after').hide();
        $('#after-radio-labelyes').hide();
        $('#after-radio-labelno').hide();
        $('#after-radio-labelyes').prop('checked',false);
        $('#after-radio-labelno').prop('checked',false);
    }
});
$('#copy_of_cancelled_cheque').change(function(e){
    var fileName = e.target.files[0].name;
$('#copy_of_cancelled_cheque_label').html(fileName);
});
$('#copy_gst_number').change(function(e){
    var fileName = e.target.files[0].name;
$('#copy_gst_number_label').html(fileName);
});
$('#copy_pan_number').change(function(e){
    var fileName = e.target.files[0].name;
$('#copy_pan_number_label').html(fileName);
});
$('#copy_tan_number').change(function(e){
    var fileName = e.target.files[0].name;
$('#copy_tan_number_label').html(fileName);
});
$('#copy_sme_number').change(function(e){
    var fileName = e.target.files[0].name;
$('#copy_sme_number_label').html(fileName);
});     
var myRegEx = new RegExp('[6-9][0-9]{9}');
$('#mobile_number-1').change(function(){
    var var1 = $('#mobile_number-1').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#mobile_number-1').focus();
    }
});
$('#mobile_number_2-1').change(function(){
    var var1 = $('#mobile_number_2-1').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#mobile_number_2-1').focus();
    }
});
$('#contact_p-1_mobilenumber1').change(function(){
    var var1 = $('#contact_p-1_mobilenumber1').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#contact_p-1_mobilenumber1').focus();
    }
});
$('#contact_p-1_mobilenumber2').change(function(){
    var var1 = $('#contact_p-1_mobilenumber2').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#contact_p-1_mobilenumber2').focus();
    }
});
$('#contact_p-2_mobilenumber1').change(function(){
    var var1 = $('#contact_p-2_mobilenumber1').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#contact_p-2_mobilenumber1').focus();
    }
});
$('#contact_p-2_mobilenumber2').change(function(){
    var var1 = $('#contact_p-2_mobilenumber2').val();
    if (var1 != myRegEx.exec(var1)) {
        alert("Please enter correct Mobile Number");
        $('#contact_p-2_mobilenumber2').focus();
    }
});
var myRegExemail = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
$('#email-1').change(function(){
    var var1 = $('#email-1').val();
    if (var1 != myRegExemail.exec(var1)) {
        alert("Please enter correct email id");
        $('#email-1').focus();
    }
});
$('#email_2-1').change(function(){
    var var1 = $('#email_2-1').val();
    if (var1 != myRegExemail.exec(var1)) {
        alert("Please enter correct email id");
        $('#email_2-1').focus();
    }
});
$('#contact_p-1_emailid').change(function(){
    var var1 = $('#contact_p-1_emailid').val();
    if (var1 != myRegExemail.exec(var1)) {
        alert("Please enter correct email id");
        $('#contact_p-1_emailid').focus();
    }
});
$('#contact_p-2_emailid').change(function(){
    var var1 = $('#contact_p-2_emailid').val();
    if (var1 != myRegExemail.exec(var1)) {
        alert("Please enter correct email id");
        $('#contact_p-2_emailid').focus();
    }
});
$('#submit-button').click(function(){
    if(($('#yes-radio').prop('checked') == false) && ($('#no-radio').prop('checked') == false)){
        alert('Please tick Yes or No in the Registered for Gst or Not');
    }
    else{
        var JSONObj = new Object();
        var JS_for_data = new Object();
        data_for_table = [];
        for(var i=0;i<list.length;i++){       
            JS_for_data = {
                "Sr.no": $('#Srno_'+list[i]+'-row').val(),
                "HSN/SAC": $('#HSN_'+list[i]+'-row').val(),
                "Description of Goods/Services": $('#description_'+list[i]+'-row').val(),
                "Address from where the supply will be made" : $('#address_'+list[i]+'-row').val()
            }
            data_for_table.push(JS_for_data);
        }
    }
    });