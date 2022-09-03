let timer1=document.getElementById("timer2");
let start1=document.getElementById("start");p.style.display
let pause=document.getElementById("pause");
let reset1=document.getElementById("reset");




let counter=0;
let interval=null;

start1.addEventListener("click",start);
pause.addEventListener("click", stop);
reset1.addEventListener("click", reset);

function timer(){
    counter++;
    let hour=Math.floor(counter/3600);
     let min=Math.floor((counter-(hour*3600))/60);
 
      let secs=Math.floor(counter%60);
      if(hour<10){
          hour="0" + hour;
      }

      if(min<10){
          min="0" + min;
      }
      if(secs<10){
          secs="0" + secs;
      }

      timer1.innerText= hour + ":"+ min + ":" + secs ;
    
}

function start(){
    if(interval){
        return
    }
    interval=setInterval(timer, 1000);
}
function stop(){
    clearInterval(interval);
    interval=null;
}
function reset(){
    stop();
    counter=0;
    timer1.innerText="00:00:00";
}
document.getElementById("start").onclick=function(){
    let time=document.getElementById("time")
    setInterval(time)
}

