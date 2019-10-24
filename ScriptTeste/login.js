

function login(){
		_click(_link("Sign in"));
		_setValue(_textbox("email"), "gu20041985@yahoo.com.br");
		_setValue(_password("passwd"), "123456");
		_click(_submit("Sign in"));
		print();
	if(_exists(_span("Home"))){
		_click(_link("Sign out"));
		return true;
		
	}else{
		return false;
	}
	
	
}