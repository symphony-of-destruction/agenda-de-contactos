
function loadCardsFromMemory(){

  if( !localStorage.getItem('contactData') ){
      localStorage.setItem('contactData', JSON.stringify([]));
  }
  
  const contact = JSON.parse( localStorage.getItem('contactData') );
  
  const $fragment = document.createDocumentFragment();
  
  contact.forEach( (card, index) => {

      const $row = document.createElement('TR');
      $row.setAttribute("identifier", index.toString());

      const $id = document.createElement('TH');
      $id.textContent = index + 1;

      const $name = document.createElement('TD');
      $name.textContent = card.name;

      const $lastname = document.createElement('TD');
      $lastname.textContent = card.lastName;

      const $email = document.createElement('TD');
      $email.textContent = card.email;

      //Button UPDATE
      const $updateContainer = document.createElement('TD');
      
      const $updateButton = document.createElement('BUTTON');
      $updateButton.classList.add('btn', 'btn-warning', 'text-white');
      $updateButton.setAttribute('data-bs-toggle','modal');  
      $updateButton.setAttribute('href','#exampleModalToggle');  
      $updateButton.setAttribute('role','button');  
      $updateButton.setAttribute('id','btn-update');  

      $updateButton.textContent = 'Update';
      $updateContainer.appendChild($updateButton);

      //Button DELETE
      const $deleteContainer = document.createElement('TD');
      
      const $deleteButton = document.createElement('BUTTON');
      $deleteButton.classList.add('btn', 'btn-danger', 'text-white');
      $deleteButton.setAttribute('id','btn-delete');
      $deleteButton.textContent = 'Delete';
      $deleteContainer.appendChild($deleteButton);

      //Button Send Email
      const $emailContainer = document.createElement('TD');
      
      const $emailButton = document.createElement('BUTTON');
      $emailButton.classList.add('btn', 'btn-info', 'text-white');
      $emailButton.textContent = '✈ Send an Email';
      $emailContainer.appendChild($emailButton);


      $row.appendChild( $id );
      $row.appendChild( $name );
      $row.appendChild( $lastname );
      $row.appendChild( $email );
      $row.appendChild( $updateContainer );
      $row.appendChild( $deleteContainer );
      $row.appendChild( $emailContainer );

      $fragment.appendChild($row);

  });

  
  document
    .getElementById('body-table')
    .appendChild($fragment);
}

document.addEventListener('DOMContentLoaded', (e)=> {

    loadCardsFromMemory();
    
});