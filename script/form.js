(function() {
    const textFieldElements = document.querySelectorAll('input[type="text"]'); // array like object not an array
    const count = textFieldElements.length;
    debugger;
    for (let i = 0; i < count; i++) {
        textFieldElements[i].addEventListener('keyup', function(event) {
            // if ((event.key >= 0 && event.key <=9) || (event.key >= 'A' && event.key <= 'z')) {
            //     textFieldElements[i].nextElementSibling.textContent = textFieldElements[i].nextElementSibling.textContent + event.key;
            // } else if(event.code === 'Backspace') {
            //     textFieldElements[i].nextElementSibling.textContent.substr(0, textFieldElements[i].nextElementSibling.textContent.length - 2);
            // }
            textFieldElements[i].nextElementSibling.textContent = event.target.value;
        });
    }
})();
