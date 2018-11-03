/* exported tryElementCounter */
'use strict';
var pResponse = document.getElementById('response-p');
var sectionResponse = document.getElementById('response-section');
var inputResponse = document.getElementById('response-input');


function tryElementCounter() {
    var elements = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elements.length; i++) {
        var element = document.querySelectorAll(elements[i].value);
        var inputName = elements[i].value;
        var length = element.length;
        var response = inputName + ' - ' + length;

        if(inputName === 'p'){
            pResponse.textContent = response;

        }
        else if(inputName === 'section'){
            sectionResponse.textContent = response;
        }

        else if(inputName === 'input'){
            inputResponse.textContent = response;

        }
    }
        
}
