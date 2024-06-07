const Button = document.querySelectorAll('.Button');

const Body = document.querySelector('body');

Button.forEach( (Button)=>{
    Button.addEventListener('click', (e)=>{
        if(e.target.id === 'gray'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            Body.style.backgroundColor = e.target.id;
        }
    })
})