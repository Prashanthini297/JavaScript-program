let count =0;
document.getElementById("counterButton1").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("counterButton2").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("counterButton3").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML=count;
}
