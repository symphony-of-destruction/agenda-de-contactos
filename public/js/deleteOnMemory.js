
  window.document.addEventListener('click', (e) => {
  
    if(e.target.getAttribute("id") == 'btn-delete'){
      const cardId = Number.parseInt( e.target.parentElement.parentElement.children[0].textContent );
      
      const contacts = JSON.parse( localStorage.getItem('contactData') );
      
      contacts.splice(cardId - 1, 1);
  
      localStorage.setItem('contactData', JSON.stringify(contacts) );
  
      window.location.reload();
      
      //console.log(cardId)
    }

  });
