function show() {
    document.querySelector('.side-filter-bar').classList.toggle('active');
    document.querySelector('#overlay').classList.toggle('active');
}

function closeSidebar() {
    document.querySelector('.side-filter-bar').classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
}

function closeSidebar() {
    document.querySelector('.side-filter-bar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
