let win;
let myscore=0;
let computerscore=0;
const winner =()=>{
   if(win==1){
    document.querySelector("#shower").innerText ="win!,computer take";
    myscore++;
    document.querySelector("#myscore").innerText=myscore;
   }
   else if(win==0){
    document.querySelector("#shower").innerText ="lost!, computer take ";
    computerscore++;
    document.querySelector("#compscore").innerText=computerscore;
   }
   else{
    document.querySelector("#shower").innerText ="its draw, play again";
   }
}
let rand;
let given;
const play=()=>{
    rand =Math.floor( Math.random()*3);
    if(rand==given){
        win=2;
    }
    else if((rand==1&&given==0)||(rand==2&&given==1)||(rand==0&&given==2)){
        win=0;
    }
    else{
        win=1;
    }

}
const tell=()=>{
    if(rand==0){
        document.querySelector("#shower").innerText =document.querySelector("#shower").innerText+" stone";

    }
    else if(rand==1){
        document.querySelector("#shower").innerText =document.querySelector("#shower").innerText+" paper";

    }
    else{
        document.querySelector("#shower").innerText =document.querySelector("#shower").innerText+" scissor";
    }
}
let box=document.querySelectorAll(".choosen");
for(let x =0;x<3;x++){
    box[x].onclick=()=>{
        given=x;
    }
    box[x].addEventListener("click",play);
    box[x].addEventListener("click",winner);
    box[x].addEventListener("click",tell);
}
