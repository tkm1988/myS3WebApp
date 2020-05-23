//import * as $ from 'jquery'
import params from './data/parameters';

interface JSONRequest {
    body : {
        text: string
    }
}

function onButtonClick() {
    const url: string  = params.url;
    
    const element: HTMLInputElement = <HTMLInputElement>document.getElementById("id_HokkaidoTextBox");
    const output: HTMLElement = <HTMLElement>document.getElementById("output");
    
    const request_text: string = element.value;
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
    }).done( (data) => {
        output.textContent = data;
    }).fail( (jqXHR, textStatus, errorThrown) => {
        alert("error");
        $("#XMLHttpRequest").html("XMLHttpRequest : " + jqXHR.status);
        $("#textStatus").html("textStatus : " + textStatus);
        $("#errorThrown").html("errorThrown : " + errorThrown);
    });
}

const execButton = document.getElementById("execbutton")!;
execButton.addEventListener("click", (e:Event) => onButtonClick());
