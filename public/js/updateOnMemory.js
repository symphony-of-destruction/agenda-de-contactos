//Load the data on the modal

window.document.addEventListener('click', (e) => {
  
    if(e.target.getAttribute("id") == 'btn-update'){
      
      const cardId = Number.parseInt( e.target.parentElement.parentElement.children[0].textContent );
      
      let contactData = {
        id: e.target.parentElement.parentElement.children[0].textContent,
        name : e.target.parentElement.parentElement.children[1].textContent,
        lastName : e.target.parentElement.parentElement.children[2].textContent,
        email : e.target.parentElement.parentElement.children[3].textContent,
        phone : ''
      }

      //Los forms values:
     
        document.getElementById('tboxfirstname').value = contactData.name
        document.getElementById('tboxlastname').value = contactData.lastName
        document.getElementById('tboxemail').value = contactData.email
        document.getElementById('tboxmobile').value = contactData.phone
        document.getElementById('tboxId').value = contactData.id

      console.log(contactData)
      console.dir(e.target.parentElement.parentElement.children)

     
    }

  });


//Then we catch the data and try to math de index in our JSON (on localStorage) en make the update of the certain index.


window.document.addEventListener('click', (e) => {
  
    if(e.target.getAttribute("id") == 'btn-update-modal'){

      if( Number.parseInt(document.getElementById('tboxId').value) <= -1  ){
          alert('Error: Usted no eligio, la opcion de actualizar. Intente de nuevo!');
      }

      let contactDataUpdate = {
        id : Number.parseInt(document.getElementById('tboxId').value) - 1,
        name : document.getElementById('tboxfirstname').value,
        lastName : document.getElementById('tboxlastname').value,
        email : document.getElementById('tboxemail').value,
        phone : document.getElementById('tboxmobile').value
      }

      const arraysContacts = JSON.parse( localStorage.getItem('contactData') );
      
      const arrayUpdate = arraysContacts.map((contacts, index)=> {
        
        if(index === contactDataUpdate.id){

            contacts.name = contactDataUpdate.name,
            contacts.lastName = contactDataUpdate.lastName,
            contacts.email = contactDataUpdate.email,
            contacts.phone = contactDataUpdate.phone
            return contacts
            //console.log(`this is special ${contacts.name}....`)
        }

        return contacts

      });

      localStorage.setItem('contactData', JSON.stringify(arrayUpdate) );

      window.location.reload();
    }
  
  
  });
