/*let id = document.getElementsByClassName("identification")[0];
let pw =  document.getElementsByClassName("password")[0];
let button = document.getElementsByTagName("button")[0];
pw.addEventListener('keyup', function() {
    if (Boolean(id) === true && Boolean(pw) === true) {
        button.Style.opacity = 1.0;
    }    
});
*/

let insertedId = document.getElementsByClassName("identification")[0];
let insertedPw = document.getElementsByClassName("password")[0];
let newopacity = document.getElementsByClassName("blue-button")[0];

insertedId.addEventListener('input', function() {
    if ((Boolean(insertedId.value) === true) && 
    (Boolean(insertedPw.value) === true)) {
        newopacity.style.opacity = '1.0';
    } else {
        newopacity.style.opacity = '0.3';
    }
});


insertedPw.addEventListener('input', function() {
    if ((Boolean(insertedId.value) === true) && 
    (Boolean(insertedPw.value) === true)) {
        newopacity.style.opacity = '1.0';
    } else {
        newopacity.style.opacity = '0.3';
    }
});
