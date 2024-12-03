function binaryTranslator(str) {
    let translatedMessage = '';
  
    str.split(' ').forEach(binaryTranslator => {
      let numericCharacterRepresentation = parseInt(binaryTranslator, 2);
      let letter = String.fromCharCode(numericCharacterRepresentation);
      translatedMessage += letter;
    })
    return translatedMessage;
  }
  
  
  
  function enteredMessage(event) {
  event.preventDefault();
  var binaryMessage = document.getElementById('BinärCode').value;
  var decode = binaryTranslator(binaryMessage);
  document.getElementById('decoded-message').innerHTML = decode;
  }
  
  var btn = document.getElementById('submit');
  btn.addEventListener('click', enteredMessage);