function Submitted(){

alert("Open The Developer Console To Check The Result");

var h=document.getElementById("height").value;
var left=document.getElementById("left").checked;
var center=document.getElementById("center").checked;
var right=document.getElementById("right").checked;
    
function leftLeaning(h){
    var row='';
    for(i=0;i<h;i++){
        row+='*';
        console.log(row);
    }
}
  
function rightLeaning(h){
    var row="";
    for (i=0;i<h-1;i++){
        row+=" ";
    }
    row+="*";
    
    for (i=0;i<h;i++){
        console.log(row);
        row = row.replace(" *","**");
    }
}
    
function pyramid(n){
const middle = Math.floor((n*2-1)/2);

    for(row = 0; row<n; row ++){
        let level='';
        for (col = 0; col< n*2-1; col++){
            if(middle - row <= col && middle + row >= col){
                level+='*';
            }else{
                level+=' ';
            }
        }
        console.log(level);
    }
}

    if (left){
       leftLeaning(h);
    } 
    if (right){
        rightLeaning(h);
    }
    if (center){
        pyramid(h);
    }

}

/*the solution without html: (not tested!)

function pattern(h,direction){

    switch(direction){
    case left:
        leftLeaning(h);
    case right:
        rightLeaning(h);
    case center:
        pyramid(h);
    }

}
*/



