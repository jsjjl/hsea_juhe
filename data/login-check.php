<?php
/**
 *	This is sample login form checker, it works only with one user&pass
 *	
 *	Laborator.co
 *	www.laborator.co 
 */


	$user = 'admin';
	$pass = 'admin1234';
	
	
	$resp = array('accessGranted' => false, 'errors' => ''); // For ajax response
	

		$given_username = $_POST['username'];
		$given_password = $_POST['passwd'];
		
		if($user == strtolower($given_username) && $pass == $given_password)
		{
			$resp['accessGranted'] = true;

		}
		else
		{
			// Error message
			$resp['errors'] = '登录失败,请确认帐号和密码正确';
		}

	echo json_encode($resp);