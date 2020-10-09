const forma = document.querySelector('#form');
document.querySelector('#toggleButton').addEventListener('click', () => {
    if (window.getComputedStyle(forma).display == "none") {
        forma.style.display = "block";
    } else {
        forma.style.display = "none";
    }
});
document.querySelector('#submitButton').addEventListener('click', () => {
    if (document.querySelector('#title').value == '' || document.querySelector('#content').value == '') {
        alert('Title i Content su obavezna polja, nemoguce je kreirati post bez njih.');
    } else {
        let postTitle = document.createElement('h2');
        postTitle.innerText = document.querySelector('#title').value;
        document.querySelector('#mainDiv').appendChild(postTitle);

        let postContent = document.createElement('p');
        postContent.innerText = document.querySelector('#title').value;
        document.querySelector('#mainDiv').appendChild(postContent);

        forma.style.display = "none";
    }
})