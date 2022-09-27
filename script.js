// let navLinks = document.querySelectorAll('nav a');
let navLinks  = document.querySelectorAll('nav div');
let projects = document.querySelectorAll('section.projects');
let projCloseBtn = document.querySelectorAll('.projects button');

// navLinks.forEach(link => {
//     link.addEventListener('click', showProject);
//     link.addEventListener('mousedown', showProject);
// });

function hideProject(e){
    e.target.parentElement.classList.remove('show');
}

function showProject(e){
    let temp = e.target;

    if(temp.localName == 'div') temp = temp.firstElementChild;
    else if(temp.localName == 'span') temp = temp.parentElement;

    temp = temp.getAttribute('href');
    projects.forEach(project => project.classList.remove('show'));
    document.querySelector(temp).classList.add('show');
}

projCloseBtn.forEach(btn => btn.addEventListener('click', hideProject));

navLinks.forEach(div => {
    div.addEventListener('click', showProject);
});
