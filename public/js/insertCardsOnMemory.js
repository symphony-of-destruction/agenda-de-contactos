if( !localStorage.getItem('contactData') ){
    localStorage.setItem('contactData', JSON.stringify([]));
}

const arrysContact = JSON.parse( localStorage.getItem('contactData') );
const $btnSave = document.getElementById('btn-save');

$btnSave.addEventListener('click', (e)=>{
    
    let contactData = {
        name : document.getElementById('tboxfirstname').value,
        lastName : document.getElementById('tboxlastname').value,
        email : document.getElementById('tboxemail').value,
        phone : document.getElementById('tboxmobile').value
    }

    arrysContact.push( contactData );
    localStorage.setItem('contactData', JSON.stringify(arrysContact) );

    window.location.reload();

});

