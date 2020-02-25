<?php

$log = file_get_contents( 'php://input' );

$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, 'https://web.njit.edu/~bsc28/middleBit.php' );

curl_setopt( $ch, CURL_POST, true );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_POSTFIELDS, $log );

$json_response = curl_exec( $ch );

if( curl_errno( $ch ) )
{
    echo 'error' . curl_error( $ch );
}
else
{
    echo $json_response;
}

curl_close( $ch );


?>
