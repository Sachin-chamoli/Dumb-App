const yes = document.getElementById('yes');
const no = document.getElementById('no');
const heading = document.getElementById('heading');
const monkey = document.getElementById('monkey');
const music = document.getElementById('music');
const btnMusic = document.getElementById('btn-music');

yes.addEventListener('click', ()=>{
   heading.innerText = "Yes I knew it😂🤣";
   document.getElementById('btn').remove();
    monkey.style.display = 'block';
    music.play();
    setTimeout(()=>{
        music.pause();
        // heading.remove();
        heading.innerText = "Thank You 😂";
        monkey.style.display = 'none';
    },5300)
})

no.addEventListener('click', ()=>{
    btnMusic.play();
    no.classList.toggle('move-bottom')
    if(no.classList.contains('move-bottom')){
        no.addEventListener('click', ()=>{
            no.classList.toggle('move-right');
            no.classList.toggle('move-top');
        })
    }
    if(no.classList.contains('move-right')){
        no.addEventListener('click', ()=>{
            no.classList.toggle('move-top');
            no.classList.toggle('move-left')
        })
    }
        if(no.classList.contains('move-left')){
            no.addEventListener('click', ()=>{
                no.classList.toggle('move-right');
                no.classList.toggle('move-bottom');
                
            })

}
})