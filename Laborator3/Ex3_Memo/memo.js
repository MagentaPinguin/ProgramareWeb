let hasFlipped=false;
let locked
let first;
let second;
let count=0;


function flipCardEvent(obj){
    if(!locked){
        obj.classList.add('flip');
        if(!hasFlipped){
            hasFlipped=true;
            first=obj;  
            return;
        }else{
            hasFlipped=false;
            second=obj;
            locked=true;
    }
    isMatch();
    }

}


function isMatch(){
    let matchValue= first.dataset.value === second.dataset.value;
    matchValue ?disableCArds():unflip();
}

function unflip(){
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        locked=false;
        }, 900);
    
}

function disableCArds(){
    first.removeAttribute('onclick',flipCardEvent);
    second.removeAttribute('onclick',flipCardEvent);
    locked=false;
    count++;
    if(count===6){
        setTimeout(() => {
        alert("Game over, you win!");
        location.reload();
    },500);
    }
}

function init(){
    values=[1,1,2,2,3,3,4,4,5,5,6,6];
    poz=[0,1,2,3,4,5,6,7,8,9,10,11];
  
    let trueValues = values.sort((a, b) => 0.5 - Math.random());
    let truePoz = poz.sort((a, b) => 0.5 - Math.random());
  
    let itr=0;
    for (id of truePoz) {
        let crtCard=document.getElementById(id);
        let crtBackface=document.getElementById("p"+id);
        crtCard.dataset.value=trueValues[itr];
        crtBackface.textContent=trueValues[itr];
        itr++;
  
      }
}