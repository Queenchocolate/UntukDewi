
let currentPage = 1;

function nextPage(pageNumber) {
    document.getElementById('page' + currentPage).classList.remove('active');
    currentPage = pageNumber;
    document.getElementById('page' + currentPage).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    nextPage(1);
});
