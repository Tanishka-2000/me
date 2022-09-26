let navLinks = document.querySelectorAll('nav a');
let projects = document.querySelectorAll('section.project');
// console.log(projects[0].getAttribute('href'));
navLinks.forEach(link => {
    link.addEventListener('click', showProject);
    link.addEventListener('focus', stopScrolling, {passive: false});
});
function showProject(e){
    let temp = e.target.getAttribute('href');
    projects.forEach(project => project.classList.remove('show'));
    document.querySelector(temp).classList.add('show');
}
function stopScrolling(e){
    console.log(e);
    e.preventDefault();
}
