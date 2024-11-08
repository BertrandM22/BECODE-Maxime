

// const hello=document.querySelector("button")
// hello.addEventListener("click",()=>{
//     alert(" bouboum bonjour !")
// })

// const bye= document.querySelector("button")
// bye.nextElementSibling.addEventListener("click",()=>{
//     alert(" BAABABAAA bye !")
// })


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        const paragraph = button.nextElementSibling;

        
        paragraph.classList.toggle('hidden');

       
        if (paragraph.classList.contains('hidden')) {
            button.textContent = 'Open tab';
        } else {
            button.textContent = 'Close tab';
        }
    });
});
