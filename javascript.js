document.querySelector('#toggleButton').addEventListener('click', () => {
    if (document.querySelector('#form').style.display == "none") {
        document.querySelector('#form').style.display = "block";
    } else {
        document.querySelector('#form').style.display = "none";
    }
});