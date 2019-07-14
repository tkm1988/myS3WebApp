//import * as $ from 'jquery'
import params from './data/parameters';

interface JSONRequest {
    body : {
        text: string
    }
}

function onButtonClick() {
    const url: string  = params.url;
    const request_text: string = document.getElementById("id_HokkaidoTextBox")!.textContent!;
    const request_data: JSONRequest = {
        body : {
            text : request_text
        }
    }

    jQuery.ajax({
        type:"post",
        url:url,
        crossDomain:true,
        data:JSON.stringify(request_data),
        contentType: 'application/json',
        dataType: "json",
    }).then(
        data => alert('Success'), 
        error => alert('Error')
    );
}

const execButton = document.getElementById("execbutton")!;
execButton.addEventListener("click", (e:Event) => onButtonClick());

