const bgm = document.getElementById("bgm");
// 播放指定音频
function play(name) {
    const url = name + '.mp3'
    bgm.src = url;
    if(bgm.played)
    bgm.play()
}

function sayHello(){
    const response = prompt("What do you feel today?");
    alert('Really? ' + response + ' ? Hope you have fun in my website!');
}

document.addEventListener('DOMContentLoaded', sayHello, false);


let text = document.getElementById('text');
let youdeng = document.getElementById('youdeng');
let wu = document.getElementById('wu');
let penzai = document.getElementById('penzai');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    youdeng.style.top = value * -1.5 + 'px';
    youdeng.style.left = value * 1.5 + 'px';
    pengzai.style.left = value * 1.5 + 'px';
    wu.style.top = value * 0.5 + 'px';
});
