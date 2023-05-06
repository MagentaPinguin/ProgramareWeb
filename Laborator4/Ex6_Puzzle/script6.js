document.addEventListener("keydown", function(event) {
      handleArrowKeys(event);
  });

function clear(table){
  for (var i = table.rows.length - 1; i >= 0; i--) {
      table.deleteRow(i);
}
}

function handleArrowKeys(event) {
  let adjPoz;
  if (event.keyCode === 37) {
      adjPoz=[emptyPoz[0], emptyPoz[1]-1];
      //alert(adjPoz);
  }
  if (event.keyCode === 38) {
      adjPoz=[emptyPoz[0]-1, emptyPoz[1]];
      //alert(adjPoz);
  }
  if (event.keyCode === 39) {
      adjPoz=[emptyPoz[0], emptyPoz[1]+1];
      //alert(adjPoz);
  }
  if (event.keyCode === 40) {
      adjPoz=[emptyPoz[0]+1, emptyPoz[1]];
     // alert(adjPoz);
  }
  if(adjPoz[0]<0 || adjPoz[0]>puzzleSize-1 || adjPoz[1]>puzzleSize-1 || adjPoz[1]<0)
      return;
  
  let emptyIndex= emptyPoz[0]*puzzleSize+emptyPoz[1];
  let adjIndex=adjPoz[0]*puzzleSize+adjPoz[1];
  
  // alert(emptyPoz);
  // alert(adjPoz);

  //alert(emptyIndex);
  //alert(adjIndex);
  //suntOk

  //alert(items);
  let aux=items[adjIndex];
  items[adjIndex]=items[emptyIndex];;
  items[emptyIndex]=aux;
  //alert(aux);
  //alert( items[emptyIndex]);
  //alert(items);
  tablePopulate();

}

function tablePopulate(){
  clear(table);
  //alert(items);
  for(var i=0;i<puzzleSize*puzzleSize;i++){ 
    if(i%puzzleSize===0){
        var crtRow=table.insertRow();
    }
  let crtCell= crtRow.insertCell();

  if(items[i]===""){
      emptyPoz[0]=Math.floor(i/puzzleSize);
      emptyPoz[1]=Math.floor(i%puzzleSize);
  } 
  crtCell.innerHTML=items[i];
  }
  //alert(emptyPoz);    

}

function start(){   

  puzzleSize= document.getElementById('puzzleDimension').value;
  table=document.getElementById('puzzle');
  items=[];
  emptyPoz=[];

  items[0]="";
  for(var i=1;i<puzzleSize*puzzleSize;i++)
    items[i]=i;
  //items = items.sort((a, b) => 0.5 - Math.random());

  tablePopulate();

}
