<?php

//echo $_POST["username"] . '<br>' . $_POST["password"];
$log = file_get_contents( 'php://input' );

//$holder = json_decode( $log, true );
//echo $holder['ucid'] . "<br>" . $holder['password'];

$ch = curl_init();

curl_setopt( $ch, CURLOPT_URL, 'https://www.web.njit.edu/~bsc28/middleBit.php' );
curl_setopt( $ch, CURL_POST, true );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_POSTFIELDS, $log ); // $log is already in json

$json_response = curl_exec( $ch );

if( curl_errno( $ch ) )
{
    echo 'error' . curl_error( $ch );
}

curl_close( $ch );


?>
