/* exported tryElementCounter */
'use strict';
var pResponse = document.getElementById('response-p');
var sectionResponse = document.getElementById('response-section');
var inputResponse = document.getElementById('response-input');
var buttonResponse = document.getElementById('response-button');

function tryElementCounter() {
    var elements = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elements.lemgth; i++) {
        var element = document.querySelectorAll(elements[i].value);
        var inputName = elements[i].value;
        var length = element.length;
        var response = inputName + ' - ' + length;

        if(inputName === 'p'){
            pResponse.textContent = response;

        }

        
    }

}