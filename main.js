var pos=0;
var turn=1;
var subject="";
var s1=0;
var s2=0;
var qo=0;
geoq=[
    "Capital of Quebec(No diacritics)","What country owns Easter Island?"
]
geoa=[
    "Montreal","Chile"
]

document.getElementById("score1").innerHTML="Score: 0";
document.getElementById("score2").innerHTML="Score: 0";
document.getElementById("turn").innerHTML="Turn: "+localStorage.getItem("Player 1");
document.getElementById("subject").innerHTML="Subject: "+localStorage.getItem("Subject");
subject=localStorage.getItem("Subject");
/*
for(i=0;i<geoq.length;i++){
    document.getElementById("q1").innerHTML=geoq[i]
    console.log(geoq[i])
    i++;
   
    
}



*/

if(subject="Geo"){

    for(i=0;i<geoq.length;i++){
        document.getElementById("q1").innerHTML=geoq[i]
        console.log(geoq[i])
        i++;
      
        
    }
}
/*

function getq(){

    if(subject="Geo"){

    for(i=0;i<geoq.length;i++){
        document.getElementById("q1").innerHTML=geoq[i]
        console.log(geoq[i])
        i++;
      
        
    }
}
}
    /* 
    if(subject="Geo"){
               
        if(pos==geoq.length){
            pos=0;
        }

        return {
            
            q:geoq[pos],
            a:geoa[pos]
            
        }

    }

    else{
        pos+=1;
        if(pos==vexq.length){
            pos=0;
        }
        return{
            q:vexq[pos],
            a:vexa[pos]
        }
    }
    
    
}
q=new getq()
document.getElementById("q1").innerHTML=q.getq()

*/


