const skilldivs = document.querySelectorAll('#skills .skills-grid > div');
let prev = null;

function hideDiv(e){
    prev.classList.remove('show');
    prev = null;
}

function showDiv(curr){
    if(prev) prev.classList.remove('show');
    curr.classList.add('show');
    prev = curr;
}

// add increasing delay on skills
for(let i = 0; i < skilldivs.length; i = i+2){
    skilldivs[i].style.transitionDelay = `${200 + i * 50}ms`;
    skilldivs[i+1].style.transitionDelay = `${200 + i * 50}ms`;
}