import * as $ from 'jquery'
import params from './data/parameters';

function onButtonCilck() {
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
        data:JSON.stringify(request_data),
        contentType: 'application/json',
        dataType: "json",
    }).then(
        data => alert('Success'), 
        error => alert('Error')
    );
}

interface JSONRequest {
    body : {
        text: string
    }
}
