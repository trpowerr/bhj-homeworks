const progress = document.getElementById('progress');
let form = document.getElementById('form');
const button = document.getElementById('send');
let formData = new FormData(form);
let xhr = new XMLHttpRequest();
button.addEventListener('click', sendForm); 
function sendForm() {
    event.preventDefault();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData); 
    let file = form.getElementsByTagName('input')[0];
    let fileSize = file.files[0].size;
    xhr.addEventListener('progress', function(event) {
        let kyloBytesLoaded = event.loaded;
        let percents = kyloBytesLoaded / fileSize;
        progress.value = percents ;
    });
}