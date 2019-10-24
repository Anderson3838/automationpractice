/*
Nome: testePrincipal.js
Autor: Anderson
Data de criação:24/10/2019 
Funcionalidades:
	*Validar funcionalidade de cadastro de usuários com cenários positivos e negativos.
	*Validar funcionalidade de login com cenários positivo e negativo.
	*Validar funcionalidade de fechamento de pedido com cenários positivo e negativo.

*/

_include("cadastro.js");
_include("login.js");
_include("pedido.js");

var $nome;
_navigateTo("http://automationpractice.com/index.php");
/*
if(cadastro()){
	$nome = cadastro;
	//feito cadastro com sucesso
	_alert("Cadastro com sucesso");

}else{
	//Não feito o cadastro
	_alert("Cadastro sem sucesso");
}
*/
if(login()){
	$nome = login;
	//Login com sucesso
	_alert("Login com sucesso");

}else{
	//Não feito o Login
	_alert("Login sem sucesso");
}

/*
if(pedido()){
	$nome = pedido;
	//Pedido com sucesso
	_alert("Pedido com sucesso");

}else{
	//Não feito o Pedido
	_alert("Pedido sem sucesso");
}
*/
_alert("Obrigado")
function print(){
	_takePageScreenShot(null, "C:\\imagens\\"+$nome+".jpg", true, {resizePercentage:100});
}	