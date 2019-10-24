  //Função pedido
function pedido(){
	_click(_link("Sign in"));
	_setValue(_textbox("email"), "gu20041985@yahoo.com.br");
	_setValue(_password("passwd"), "123456");
	_click(_submit("Sign in"));
	
	_click(_link("Women"));	
	_click(_image(8));
	_click(_image(10));	
	_click(_link("Blue"));	
	_click(_submit("Add to cart"));	
	_click(_span("Proceed to checkout"));	
	
	_click(_span(64));
	_setValue(_textarea("message"), "OK");	
	_click(_submit("Proceed to checkout"));	
	
	_click(_checkbox("cgv"));	
	_click(_submit("Proceed to checkout"));	
	
	_click(_link("Pay by bank wire (order processing will be longer)"));	
	_click(_submit("I confirm my order"));
	print();
	
	if(_exists(_heading1("Order confirmation"))){
		_click(_link("Sign out"));
		return true;
		
	}else{
		return false;
	}	
}