/*const loginform = document.getElementById( 'form' );

loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData( this );

    fetch( 'login.php', {
        method: 'post',
        body: formData
    }).then( response => {
        response.text(); 
    }).catch( error => {
        console.error( error );
    })

});
*/
const loginform = document.getElementById( 'formid' );

loginform.addEventListener( 'submit', function( e ) {
	e.preventDefault();
	const formData = new FormData( this );

	fetch( 'login.php', {
		method: 'post',
		body: formData
		
	}).then( function (response) {
		return response.text
	}).catch( function (error) {
		console.error( error )
	})
});

