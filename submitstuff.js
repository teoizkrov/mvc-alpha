document.getElementById( 'formid' ).addEventListener( 'submit', postInfo );

function postInfo( event ) 
{
    event.preventDefault();
    let user = document.getElementById( 'username' ).value;
    let pass = document.getElementById( 'password' ).value;

    let theking = document.getElementById( 'theking' );

    const myPost = {
        ucid: user,
        password: pass
    }
    
    fetch( 'login.php' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( myPost )    
    })
    .then(( response ) => response.json() )
    .then(( data ) =>
    {
        if( data.LoginNJIT == 'F' && data.LoginUs == 'T')
            theking.innerHTML = "We recognize you but NJIT doesnt";
        else if( data.LoginNJIT == 'T' && data.LoginUs == 'F' )
            theking.innerHTML = "We dont recognize you but NJIT does";
        else
            theking.innerHTML = "Neither of us recognize you. Go away"; 

    })
    .catch(( error ) => console.error( error ));
}


