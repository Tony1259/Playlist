const playBtn = document.querySelector('#play-button');
const pauseBtn = document.querySelector('#pause-button');
const audio = document.querySelector('#audio'); 
const links = document.querySelectorAll('h2');
const dropdowns = document.querySelectorAll('.dropdown');
const musicBtn = document.querySelector('#musicBtn')
const aboutBtn = document.querySelector('#aboutBtn')
const eventsBtn = document.querySelector('#eventsBtn')
const programBtn = document.querySelector('#programBtn')
const music = document.querySelector('#music')
const about = document.querySelector('#about')
const events = document.querySelector('#events')
const program = document.querySelector('#program')
const navigation = document.querySelector('#navigation')
const openMenu = document.querySelector('#openMenu')
const closeMenu = document.querySelector('#closeMenu')

openMenu.addEventListener('click', () =>{
    navigation.classList.add('show-menu')
})
closeMenu.addEventListener('click', () =>{
    navigation.classList.remove('show-menu')
})



musicBtn.addEventListener('click',function(){
    if(music.classList.contains('show')){
        music.classList.remove('show')
    }else{
        music.classList.add('show') 
    }
})
aboutBtn.addEventListener('click',function(){
    if(about.classList.contains('show')){
        about.classList.remove('show')
    }else{
        about.classList.add('show') 
    }
})
eventsBtn.addEventListener('click',function(){
    if(events.classList.contains('show')){
        events.classList.remove('show')
    }else{
        events.classList.add('show') 
    }
})
programBtn.addEventListener('click',function(){
    if(program.classList.contains('show')){
        program.classList.remove('show')
    }else{
        program.classList.add('show') 
    }
})

playBtn.addEventListener('click',function(){
    if(playBtn.classList.contains('fa-play')){
        playBtn.classList.remove('fa-play') 
        playBtn.classList.add('fa-pause') 
    }else{
        playBtn.classList.remove('fa-pause') 
        playBtn.classList.add('fa-play') 
    }
    
    isAudioPlaying() === true ? playAudio() : pauseAudio();
})
function isAudioPlaying(){
    return playBtn.classList.contains('fa-pause')
}

function playAudio(){
    audio.play();
}
function pauseAudio(){
    audio.pause();
}

