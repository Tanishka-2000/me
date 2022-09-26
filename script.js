let navLinks = document.querySelectorAll('nav a');
let projects = document.querySelectorAll('section.projects');
let projCloseBtn = document.querySelectorAll('.projects button');

navLinks.forEach(link => {
    link.addEventListener('click', showProject);
    link.addEventListener('mousedown', showProject);
});
function showProject(e){
    let temp = e.target.getAttribute('href');
    projects.forEach(project => project.classList.remove('show'));
    document.querySelector(temp).classList.add('show');
}
projCloseBtn.forEach(btn => btn.addEventListener('click', hideProject));
function hideProject(e){
    console.log(e.target.parentElement);
    e.target.parentElement.classList.remove('show');
}
