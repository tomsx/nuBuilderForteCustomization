/* nuBuilder Forte - Sending an SMS with Twilio */
/* Purpose: Watch https://youtu.be/djuWcsRH7UM */

// Example usage:
cusSendSMSTwilio("+12685555555","#sms_to#", "#sms_text#"); 

function cusSendSMSTwilio($from, $to, $body) {   
    $id = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";  // replace with your Account SID 
    $token = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // replace with your Auth Token.
    $url = "https://api.twilio.com/2010-04-01/Accounts/$id/Messages.json";
    
    $data = array (
        'From' => $from,
        'To' => $to,  
        'Body' => $body
    );                      
    $post = $data;
    $x = curl_init($url);
    curl_setopt($x, CURLOPT_POST, true);
    curl_setopt($x, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($x, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($x, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($x, CURLOPT_USERPWD, "$id:$token");
    curl_setopt($x, CURLOPT_POSTFIELDS, $post);
    $y = curl_exec($x);
    curl_close($x);          
    $out = explode('|', $y);         
    nuDebug($out);
}     

