import 'jquery'
import params from './data/parameters';

function onButtonCilck() {
    let url: string  = params.url;
    let request_text: string = document.getElementById("id_HokkaidoTextBox").textContent;
    let request_data: JSONRequest = {
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
