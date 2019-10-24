
function cadastro(){
	_click(_link("Sign in"));
	_click(_submit("Create an account"));
	_setValue(_textbox("email_create"), "gu20041985@yahoo.com.br");
	_click(_submit("Create an account"));
	_check(_radio("id_gender1"));
	_setValue(_textbox("customer_firstname"), "gustavo");
	_setValue(_textbox("customer_lastname"), "forrest");
	_setValue(_textbox("email"), "gu20041985@yahoo.com.br");
	_setValue(_password("passwd"), "123456");
	_setSelected(_select("days"), "1");
	_setSelected(_select("months"), "November");
	_setSelected(_select("years"), "1985");
	_setValue(_textbox("company"), "teste");
	_setValue(_textbox("address1"), "teste,teste,teste,teste");
	_setValue(_textbox("address2"), "casa33");
	_setValue(_textbox("city"), "são paulo");
	_setSelected(_select("id_state"), "California");
	_setSelected(_select("id_state"), "Arkansas");
	_setSelected(_select("id_state"), "California");
	_setValue(_textbox("postcode"), "00000");
	_setValue(_textarea("other"), "11");
	_setValue(_textbox("phone"), "1155559999");
	_setValue(_textbox("phone_mobile"), "11959035228");
	_setValue(_textbox("alias"), "gu20041985@gmail.com.br");
	_click(_submit("Register"));
	print();
	if(_exists(_div("alert alert-danger"))){
		return false;
		
	}else{
		_click(_link("Sign out"));
		return true;
	}
}