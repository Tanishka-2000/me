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

