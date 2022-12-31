const sections = document.querySelectorAll('.section'); // select all sections
const secBtns = document.querySelectorAll('.controls'); //select one the control button colection
const secBtn = document.querySelectorAll('.control'); //set of all control buttons
const allSections = document.querySelectorAll('.main-content'); //selects the body

function PageTransitions(){
    for(let i=0; i<sections.length; i++){
        secBtn[i].addEventListener('click', function(){
            const currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';  
        })
    }
    // section active class
    for(let i=0; i<allSections.length; i++){
        allSections[i].addEventListener('click', (e)=>{
            const id = e.target.dataset.id;
            if(id){
                // remove selected from other btns
                secBtn.forEach((btn)=>{
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
                // remove active from other sections
                sections.forEach((section)=>{
                    section.classList.remove('active');
                })
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    }
    
}

PageTransitions();