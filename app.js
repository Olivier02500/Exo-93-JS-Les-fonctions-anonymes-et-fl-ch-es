let message = document.getElementById('alert');
let somme = document.getElementById('somme');
let para = document.getElementById('para');

message.addEventListener('click' , () => {
    alert("Hello world");
    message.style.color = 'white';
});


somme.addEventListener('click', event => {
    let div = document.createElement('div');
    div.innerHTML = 5 + 6;
    para.appendChild(div);
    message.style.color = 'white';
})