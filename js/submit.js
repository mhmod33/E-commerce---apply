let apiUrl="https://script.google.com/macros/s/AKfycbxsD8SMRwRVhUr92b-pFhbcrazac72P4ijqH_V3mt1pCourtR0busGNTFxSj45__5vTZw/exec"

let buttonPlacement = document.querySelector('.place-btn');

let form=document.getElementById('placementData');
buttonPlacement.addEventListener('click',(e) => {
    e.preventDefault()
    fetch(apiUrl,{
        method: 'POST',
        body: new FormData (form)
    }).then((Response) => {
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    })
    .catch((error) => {
        console.error("error!", error.message);
    })})
