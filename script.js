let index=0;
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let audioelement = new Audio('./music/1.mp3');
let bg=document.getElementById("bgimg")
let songlist=Array.from(document.getElementsByClassName('songlist'));
let songs=[
    {songname:"_Har Har Shambhu ",filepath:"./music/1.mp3",coverpath:"./img/1.jpg"},
    {songname:"_Ram Siya Ram",filepath:"./music/2.mp3",coverpath:"./img/2.jpg"},
    {songname:"Galliyan Mashup",filepath:"./music/3.mp3",coverpath:"./img/3.jpg"},
    {songname:"Let Me Down Slowly",filepath:"./music/4.mp3",coverpath:"./img/4.jpg"},
    {songname:"Tere Vaaste Main Falak ",filepath:"./music/5.mp3",coverpath:"./img/5.jpg"},
    {songname:"Zihaal e Miskin",filepath:"./music/6.mp3",coverpath:"./img/6.jpg"}
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt(audioelement.currentTime/audioelement.duration*100);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime =myprogressbar.value*audioelement.duration/100;
})
songlist.forEach((element , i) => {
    element.getElementsByClassName('listimg')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
});
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
let index=parseInt(e.target.id);
makeAllPlay();
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioelement.src=`./music/${index}.mp3`;
bg.src=`./img/${index}.jpg`;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=6)
    {
        index=1;
    }
    else{
    index +=1;
    }
audioelement.src=`./music/${index}.mp3`;
bg.src=`./img/${index}.jpg`;
console.log(bg);
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=1)
    {
        index=6;
    }
    else{
    index -=1;
    }
audioelement.src=`./music/${index}.mp3`;
bg.src=`./img/${index}.jpg`;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})
