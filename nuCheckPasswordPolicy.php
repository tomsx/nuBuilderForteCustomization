// Added nuTranlsate to nuCheckPasswordPolicy() 
// https://wiki.nubuilder.net/nubuilderforte/index.php/User_Access#Creating_Password_Policies

function nuCheckPasswordPolicy() {

	$oldpw = '#old_password#';
	$newpw = '#new_password#';
	$passwordErr = "";
	
	if($newpw === $oldpw) {
		$passwordErr .= nuTranslate("The provided New Password cannot be the same as the Current Password!")."<br>";
	}
	if(strlen($newpw) < 8) {
		$passwordErr .= nuTranslate("Your Password must contain at least 8 Characters!")."<br>";
	}
	if(!preg_match("#[0-9]+#", $newpw)) {
		$passwordErr .= nuTranslate("Your Password must contain at least 1 Number!")."<br>";
	}
	if(!preg_match("#[A-Z]+#", $newpw)) {
		$passwordErr .= nuTranslate("Your Password must contain at least 1 Capital Letter!")."<br>";
	}
	if(!preg_match("#[a-z]+#", $newpw)) {
		$passwordErr .= nuTranslate("Your Password must contain at least 1 Lowercase Letter!")."<br>";
	}
	if(!preg_match('/[\'\/~`\!@#\$%\^&\*\(\)_\-\+=\{\}\[\]\|;:"\<\>,\.\?\\\]/', $newpw)) {
		$passwordErr .= nuTranslate("Your Password must contain at least 1 Special Character!")."<br>";
	}
	if(strlen($passwordErr) > 0) {
		nuDisplayError($passwordErr);
		return false;
	} else {
		return true;
	}
}

function nuTranslate($s) {
	$t = $_SESSION['translation'];
	foreach($t as $k => $v) {
		if($v['english'] === $s) {
			return $v['translation'];
		}
	}
	return $e;
}
