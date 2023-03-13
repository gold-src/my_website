document.getElementById('menuBtn').addEventListener('click', (event) => {
    if (document.getElementById('navbar-open').style.display == 'flex') {
        document.getElementById('navbar-open').style.display = 'none'
        document.getElementById('menuBtn').innerHTML = 'Menu';
    } else {
        document.getElementById('navbar-open').style.display = 'flex';
        document.getElementById('menuBtn').innerHTML = 'Close';
    }
});

document.getElementById('backgroundColor').addEventListener('click', (event) => {
    if (document.getElementById('navbar-open').style.display == 'flex') {
        document.getElementById('navbar-open').style.display = 'none'
        document.getElementById('menuBtn').innerHTML = 'Menu';
    }
})