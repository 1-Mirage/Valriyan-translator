var button = document.getElementById("btn-translate");
var txtInput = document.getElementById("txt-input");
var outputDiv = document.getElementById("output");



var serverURL = "https://api.funtranslations.com/translate/valyrian.json"




function errors(error)
 {
    console.log("error", error);
    alert("something wrong with server! try again after some time")
}
function geturl(input) 
{
    return serverURL + "?" + "text=" + input
}


function execute() 
{
    let inputText = txtInput.value; 
    fetch(geturl(inputText)).then(response => response.json()).then(json => 
        {
            outputDiv.innerText = json.contents.translated; 
        })
           .catch(errors)
};

button.addEventListener("click", execute);