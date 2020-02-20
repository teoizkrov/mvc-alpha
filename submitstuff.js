document.getElementById( 'formid' ).addEventListener( 'submit', postInfo );

function postInfo(event) 
{
    event.preventDefault();
    let user = document.getElementById( 'username' ).value;
    let pass = document.getElementById( 'password' ).value;

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
    .then( (response) => response.json() )
    .then( (data) => console.log(data) )
    .catch( (error) => console.error(error) );


}
