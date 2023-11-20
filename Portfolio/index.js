const ul= document.querySelector('.nav');
const icon = document.getElementById('icon');
icon.addEventListener('click',()=>{
    if (ul.style.display == 'none')
        {
            ul.style.display = 'block'
        }
    else
       {
        ul.style.display = 'none';
       }
});

const cursorDot = document.querySelector('[data-attribute]')
const cursor2 = document.querySelector('.cursor-out')
const cursor = document.querySelector('.cursor-out1')
const cursor1 = document.querySelector('.cursor-out2')
const cursor3 = document.querySelector('.cursor-out3')
const cursor4 = document.querySelector('.cursor-out4')
window.addEventListener('mousemove',(e)=>{
    let x = e.clientX; //x position of the mouse
    let y = e.clientY; //y position of the mouse
    cursorDot.style.left = x+'px'
    cursorDot.style.top = y+'px'

    cursor1.style.left = x+'px'
    cursor1.style.top = y+'px'

    cursor2.animate({
        left:`${x}px`,
        top: `${y}px`
    },{duration:1700,fill:"forwards"})
    
    cursor.animate({
        left:`${x}px`,
        top: `${y}px`
    },{duration:1500,fill:"forwards"})

    cursor3.animate({
        left:`${x}px`,
        top: `${y}px`
    },{duration:1000,fill:"forwards"})
    

    cursor4.animate({
        left:`${x}px`,
        top: `${y}px`
    },{duration:500,fill:"forwards"})
    
});

// Scroll animation
const NameShow = document.querySelector('.name');
setInterval(()=>{
    NameShow.classList.add('show');
},3700)

// Project container
const ProjectContainer  = document.querySelectorAll('.project-container');
const language  = document.querySelectorAll('.language');
const Heading  = document.querySelectorAll('.Heading');
const btnlast = document.querySelectorAll('.btnlast1');
window.addEventListener('scroll',(()=>{
        const WindowHeight = window.innerHeight;

        Heading.forEach(box =>{
            const top = box.getBoundingClientRect().bottom;
            if(top < WindowHeight ){
                box.style.display = 'block'
            }
            else{
                box.style.display = 'none'
            }
        })

        language.forEach(box =>{
            const top = box.getBoundingClientRect().bottom ;
            if(top  < WindowHeight ){
                box.classList.add('show');
            }
            else{
                box.classList.remove('show');
            }
        })

        ProjectContainer.forEach(box =>{
            const top = box.getBoundingClientRect().bottom;
            if(top < WindowHeight ){
                box.classList.add('show1');
            }
            else{
                box.classList.remove('show1');
            }
        })
        btnlast.forEach(box =>{
            const top = box.getBoundingClientRect().bottom;
            if(top < WindowHeight ){
                box.style.display = 'block'
            }
            else{
                box.style.display = 'none';
            }
        })
}))

